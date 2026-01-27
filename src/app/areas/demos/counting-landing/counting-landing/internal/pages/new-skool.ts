import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'app-demos-pages-new-skool',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout],
  template: `<app-ui-page title="old-skool">
    <p>{{ time() }}</p>
    <div class="flex items-center justify-center">
      <button class="btn btn-circle btn-error" (click)="decrement()">-</button>
      <span class="mx-2 text-2xl font-mono">{{ count() }}</span>
      <button class="btn btn-circle btn-success" (click)="increment()">+</button>
      <span class="mx-2 text-2xl font-mono">{{ doubled() }}</span>
      <span class="mx-2 text-2xl font-mono">{{ timesTen() }}</span>
      @switch (isEven()) {
        @case ('even') {
          <p>It is even</p>
        }
        @case ('odd') {
          <p>It is odd</p>
        }
        @default {
          <p>It is something else..</p>
        }
      }
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class NewSkoolPage {
  // effect has to be used in what is now known as an "injection context".
  // in a component, that is usually the constructor. I'll show you more injection contexts later.

  time = signal('');
  constructor() {
    effect(() => {
      // reference any signal here and it will be "tracked".
      const current = this.count();
      if (current == 12) {
        // call the api, dispatch an action, whatever
        console.log(`We have a winner! ${current}`);
      }
      // do something...
    });

    const timerId = setInterval(() => {
      this.time.set(new Date().toLocaleTimeString());
      this.count.update((c) => c + 1);
    }, 1000);

    effect((effectCleanupFunction) => {
      if (this.count() === 10) {
        effectCleanupFunction(() => clearInterval(timerId));
      }
    });
  }
  // the jeff default = no "raw" state (variables) in a component, all signals all the time.
  count = signal(0); // a variable

  // short circuit = if the count isn't zero, and only if, see if it is evenly divisible by 2
  isEven = computed(() => {
    // It will "watch" EVERY signal in this function. If that signal changes, the computed value will automatically re-evaluate.
    // log out the value, call an api, whatever..
    const current = this.count();
    if (current == 0) return 'nothing';
    if (current % 2 === 0) return 'even';
    return 'odd';
  });

  doubled = computed(() => this.count() * 2);
  timesTen = computed(() => (this.isEven() === 'even' ? this.count() * 10 : 0));

  increment() {
    // way one - give it a new value
    this.count.set(this.count() + 1);
  }

  decrement() {
    // way two - give it a function, it will give you the current value, the function should return the new value
    this.count.update((currentValue) => currentValue - 1);
  }

  updateTheUi() {
    // go find the span with the current...
    // go find the spand where it is doubled... update that
    // go find the span where it is * 10 ... update that.
  }
}
