import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { counterStore } from '../../stores/counter';

@Component({
  selector: 'app-counting-button-reset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button class="btn btn-primary" (click)="store.reset()" [disabled]="store.current() === 0">
        Reset
      </button>
      @if (store.current() === 0) {
        <span class="text-sm opacity-80">Cannot Reset because you are at the reset point</span>
      }
    </div>
  `,
  styles: ``,
})
export class ButtonReset {
  store = inject(counterStore);
}
