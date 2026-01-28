import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { counterStore } from '../../stores/counter';
import { authStore } from '@ht/shared/util-auth/store';

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
  // we don't have to create "reusable components"
  // This OWNS a portional application functionality
  store = inject(counterStore); // the store is the input!
  auth = inject(authStore);
}
