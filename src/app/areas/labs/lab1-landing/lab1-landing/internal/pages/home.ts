import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { Clock } from '../widgets/clock';

@Component({
  selector: 'ht-home-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout, Clock],
  template: `
    <app-ui-page title="First Lab">
      <div class="flex flex-row">
        <app-labs-lab1-clock class="ml-auto" (taskAccomplished)="addTaskCompletion($event)" />
      </div>
      <div class="flex flex-column">
        <span>Total Tasks: {{ this.totalTasks() }}</span>
      </div>
    </app-ui-page>
  `,
  styles: ``,
})
export class HomePage {
  taskCompletion = signal<{ startTime: Date; endTime: Date }>({
    startTime: new Date(),
    endTime: new Date(),
  });
  taskList: { startTime?: Date; endTime?: Date }[] = [];
  totalTasks = computed(() => {
    this.taskList.push(this.taskCompletion());
    return this.taskList.length;
  });
  addTaskCompletion(taskData: { startTime: Date; endTime: Date }) {
    this.taskCompletion.set({ startTime: taskData.startTime, endTime: taskData.endTime });
  }
}
