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
    <div class="grid  md:grid-cols-3  grid-cols-1 gap-4   ">
      @for (resource of links(); track resource.id) {
        <div class="bg-base-100 p-2  rounded-lg shadow-2xl  flex flex-col h-full w-full">
          <h3 class="text-xl p-2 font-boldest text-secondary w-full">{{ resource.title }}</h3>
          <hr class="divider m-0" />
          <div class="flex flex-row w-full h-full justify-between items-start">
            <div class="flex flex-col justify-stretch w-1/3 gap-2 ">
              <app-links-resource-link
                [link]="resource.primaryLink"
                kind="primary"
                (linkVisited)="onLinkVisited($event)"
              />
              @for (link of resource.additionalLinks; track link.href) {
                <app-links-resource-link
                  kind="additional"
                  [link]="link"
                  (linkVisited)="onLinkVisited($event)"
                />
              }
            </div>
            <div class="flex flex-col w-2/3 pl-4 bg-base-200 p-4 mx-4 h-full rounded-lg">
              <p class="text-base-content text-sm font-light italic mb-2">
                {{ resource.description }}
              </p>
            </div>
          </div>
        </div>
      }
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class HomePage {
  onLinkVisited(linkHref: string) {
    console.log('Link visited:', linkHref);
    // Here you can add any additional logic you want to execute when a link is visited
  }
  links = signal<Resource[]>([
    {
      id: 'typescript',
      title: 'TypeScripting',
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
      description:
        'The Site from Google on Angular. This replaces the old Angular.io site. Use this one instead. It sort of stinks because the old one comes up on a Google search. Someone at Angular (Google) should tell someone at Google (Google) to fix that.',
      primaryLink: {
        href: 'https://angular.dev/',
        label: 'Home Page',
      },
    },
    {
      id: 'rxjs',
      title: 'RxJS',
      description: 'Reactive Extensions Library for JavaScript',
      primaryLink: {
        href: 'https://rxjs.dev/',
        label: 'Official Site',
      },
      additionalLinks: [
        {
          href: 'https://rxjs.dev/guide/overview',
          label: 'Guide',
        },
        {
          href: 'https://rxjs.dev/api',
          label: 'API Reference',
        },
        {
          href: 'https://www.learnrxjs.io/',
          label: 'Learn RxJS',
        },
      ],
    },
    {
      id: 'tailwind',
      title: 'Tailwind CSS',
      description: 'A utility-first CSS framework',
      primaryLink: {
        href: 'https://tailwindcss.com/',
        label: 'Home Page',
      },
      additionalLinks: [
        {
          href: 'https://tailwindcss.com/docs',
          label: 'Documentation',
        },
        {
          href: 'https://tailwindui.com/',
          label: 'Tailwind UI',
        },
      ],
    },
    {
      id: 'vitest',
      title: 'Vitest',
      description: 'A blazing fast unit test framework powered by Vite',
      primaryLink: {
        href: 'https://vitest.dev/',
        label: 'Official Site',
      },
    },
    {
      id: 'playwright',
      title: 'Playwright',
      description: 'Fast and reliable end-to-end testing for modern web apps',
      primaryLink: {
        href: 'https://playwright.dev/',
        label: 'Home Page',
      },
      additionalLinks: [
        {
          href: 'https://playwright.dev/docs/intro',
          label: 'Getting Started',
        },
        {
          href: 'https://playwright.dev/docs/api/class-playwright',
          label: 'API Docs',
        },
      ],
    },
    {
      id: 'signals',
      title: 'Angular Signals',
      description: 'Reactive primitives for fine-grained reactivity',
      primaryLink: {
        href: 'https://angular.dev/guide/signals',
        label: 'Signals Guide',
      },
      additionalLinks: [
        {
          href: 'https://angular.dev/api/core/signal',
          label: 'Signal API',
        },
        {
          href: 'https://angular.dev/guide/signals/inputs',
          label: 'Signal Inputs',
        },
        {
          href: 'https://angular.dev/guide/signals/queries',
          label: 'Signal Queries',
        },
      ],
    },
  ]);
}
