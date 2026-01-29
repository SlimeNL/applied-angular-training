import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ResourceLink } from '../types';

@Component({
  selector: 'app-links-resource-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIcon],
  template: `
    <a [href]="link().href" target="_blank" rel="noopener noreferrer" [title]="link().label"
      ><div
        class="flex flex-row gap-2  text-sm items-center justify-start p-2 h-6  group relative  transition-all duration-200 ease-in-out"
        [class]="kind() === 'primary' ? primaryClasses() : additionalClasses()"
      >
        <span class="truncate text-ellipsis">{{ link().label }}</span>
        <span class="invisible group-hover:visible">
          <ng-icon name="lucideExternalLink" class="linky" />
        </span>
      </div>
    </a>
  `,
  styles: `
    .linky {
      color: rebeccapurple;
    }
  `,
  host: {
    class:
      'cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out origin-left hover:bg-current/120 ',
    '(click)': 'linkVisited.emit(link().href)',
  },
})
export class LinkResourceItemLink {
  // old skool you would use @Input() decorator. No more.

  link = input.required<ResourceLink>();
  kind = input<'primary' | 'additional'>('primary');
  linkVisited = output<string>();
  primaryClasses = signal('text-black font-bolder uppercase bg-secondary/80 ');
  additionalClasses = signal(' bg-accent/80 text-black  font-normal ');
}
