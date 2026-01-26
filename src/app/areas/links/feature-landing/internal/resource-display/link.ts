import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { ResourceLink } from '../types';

@Component({
  selector: 'app-links-resource-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <li class="btn btn-accent btn-xs m-2 col-span-2">
      <a class="" href="{{ link().href }}" target="_blank" rel="noopener noreferrer">{{
        link().label
      }}</a>
    </li>
  `,
  styles: ``,
})
export class LinkResourceItemLink {
  // old skool you would use @Input() decorator. No more.
  link = input.required<ResourceLink>();
}
