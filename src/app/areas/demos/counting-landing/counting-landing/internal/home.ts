import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { SectionLayout, SectionLink } from '@ht/shared/ui-common/layouts/section';

@Component({
  selector: 'app-counting-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionLayout],
  template: ` <app-ui-section-layout title="counting" [links]="links()" /> `,
  styles: ``,
})
export class Home {
  links = signal<SectionLink[]>([
    {
      path: 'old-skool',
      title: 'Old Skool',
    },
    {
      path: 'new-skool',
      title: 'New Skool',
    },
    {
      path: 'communications',
      title: 'Communications',
    },
    {
      path: 'host-stuff',
      title: 'Host Stuff',
    },
  ]);
}
