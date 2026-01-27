import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-super-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <button>-</button> `,
  styles: ``,
})
export class Button {}
