import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demos-say-hi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <h1>Hi</h1> `,
  styles: ``,
  host: {
    class: 'col-span-2',
  },
})
export class Thingy {}
