import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { Resource } from '../types';
import { LinkResourceItemLink } from '../resource-display/link';
/* Note - you can use either interface or type for this. The differences are so small, I don't care. I like 'type' */

@Component({
  selector: 'app-links-pages-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout, LinkResourceItemLink],
  template: `<app-ui-page title="List of Links">
    <div class="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-2">
      @for (resource of links(); track resource.id) {
        <div class="bg-base-100 p-4 rounded-lg shadow-md flex flex-col  ">
          <p class="text-lg text-primary">{{ resource.title }}</p>
          <p class="text-base/70">{{ resource.description }}</p>
          <ul class="grid grid-cols-2 border-2 border-dashed border-accent/50 mt-4 p-4 h-full">
            <app-links-resource-link [link]="resource.primaryLink"></app-links-resource-link>
            @for (other of resource.additionalLinks; track other.href) {
              <li class="btn btn-accent btn-xs m-2 ">
                <app-links-resource-link [link]="other"></app-links-resource-link>
              </li>
            }
          </ul>
        </div>
      }
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class HomePage {
  links = signal<Resource[]>([
    {
      id: 'typescript',
      title: 'TypeScript',
      description: 'The Site from Microsoft on TypeScript',
      primaryLink: {
        href: 'https://www.typescriptlang.org/',
        label: 'Home Page',
      },
      additionalLinks: [
        {
          href: 'https://www.typescriptlang.org/docs/handbook',
          label: 'Handbook',
        },
        {
          href: 'https://www.typescriptlang.org/play',
          label: 'Playground',
        },
      ],
    },
    {
      id: 'angular',
      title: 'Angular',
      description: 'The Site from Google on Angular',
      primaryLink: {
        href: 'https://angular.dev/',
        label: 'Home Page',
      },
    },
  ]);
}
