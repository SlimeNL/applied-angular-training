import { Component, ChangeDetectionStrategy, signal, output } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-labs-lab1-clock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  template: `
    <div class="flex">
      @if (!this.recording()) {
        <button class="btn btn-xs btn-circle btn-success mr-2 hover-3d" (click)="startRecording()">
          <ng-icon name="lucidePlay" size="20"></ng-icon>
        </button>
      } @else {
        <button class="btn btn-xs btn-circle btn-success mr-2 hover-3d" (click)="completeTask()">
          <ng-icon name="lucideAlarmClockCheck" size="20"></ng-icon>
        </button>
        <button class="btn btn-xs btn-circle btn-error mr-2 hover-3d" (click)="cancelTask()">
          <ng-icon name="lucideAlarmClockOff" size="20"></ng-icon>
        </button>
      }
      <span
        class="countdown font-mono text-2xl font-bold"
        [class]="this.recording() ? ' text-green-500 animate-pulse' : 'text-gray-300'"
      >
        <span
          style="--value:{{ this.time().getHours() }};"
          aria-live="polite"
          aria-label="{{ this.time().getHours() }}"
          >{{ this.time().getHours() }}</span
        >
        :
        <span
          style="--value:{{ this.time().getMinutes() }}; --digits: 2;"
          aria-live="polite"
          aria-label="{{ this.time().getMinutes() }}"
          >{{ this.time().getMinutes() }}</span
        >
        :
        <span
          style="--value:{{ this.time().getSeconds() }}; --digits: 2;"
          aria-live="polite"
          aria-label="{{ this.time().getSeconds() }}"
          >{{ this.time().getSeconds() }}</span
        >
      </span>
    </div>
  `,
  styles: ``,
})
export class Clock {
  recording = signal(false);
  time = signal<Date>(new Date());
  startedTaskTime: Date | undefined;
  endedTaskTime: Date | undefined;

  taskAccomplished = output<{ startTime: Date; endTime: Date }>();
  constructor() {
    setInterval(() => {
      this.time.set(new Date());
    }, 1000);
  }

  startRecording() {
    this.recording.set(true);
    this.startedTaskTime = new Date();
  }
  completeTask() {
    this.recording.set(false);
    this.endedTaskTime = new Date();
    if (this.startedTaskTime && this.endedTaskTime) {
      this.taskAccomplished.emit({ startTime: this.startedTaskTime, endTime: this.endedTaskTime });
    }
  }
  cancelTask() {
    this.recording.set(false);
    this.startedTaskTime = undefined;
    this.endedTaskTime = undefined;
  }
}
