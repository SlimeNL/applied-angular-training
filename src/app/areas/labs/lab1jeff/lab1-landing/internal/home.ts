import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SectionLayout, SectionLink } from '@ht/shared/ui-common/layouts/section';
import { authStore } from '@ht/shared/util-auth/store';

@Component({
  selector: 'app-jefflabs-home',
  providers: [authStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionLayout],
  template: ` <app-ui-section-layout title="Jeff Lab" [links]="links()"> </app-ui-section-layout> `,
  styles: ``,
})
export class Home {
  links = signal<SectionLink[]>([
    {
      path: 'recorder',
      title: 'Recorder',
    },
  ]);
}
