import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'app-demos-pages-old-skool',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout],
  template: `<app-ui-page title="old-skool">
    <div class="flex items-center justify-center">
      <button class="btn btn-circle btn-error" (click)="decrement()">-</button>
      <span class="mx-2 text-2xl font-mono">{{ count }}</span>
      <button class="btn btn-circle btn-success" (click)="increment()">+</button>
      <span class="mx-2 text-2xl font-mono">{{ count * 2 }}</span>
      <span class="mx-2 text-2xl font-mono">{{ count * 10 }}</span>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class OldSkoolPage {
  count = 0; // a variable

  increment() {
    this.count++; // that is mutated based on some user interaction
  }

  decrement() {
    this.count--; // that is mutated based on some user interaction
  }

  updateTheUi() {
    // go find the span with the current...
    // go find the spand where it is doubled... update that
    // go find the span where it is * 10 ... update that.
  }
}
