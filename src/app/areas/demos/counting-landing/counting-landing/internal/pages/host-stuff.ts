import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';
import { Thingy } from './widgets/thingy';

@Component({
  selector: 'app-demos-pages-host-stuff',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout, Thingy],
  template: `<app-ui-page title="host-stuff">
    <div class="grid grid-cols-2 gap-4">
      <div class="p-2 bg-orange-900 text-black col-span-2">
        <app-demos-say-hi></app-demos-say-hi>
      </div>
      <h1>How Are you</h1>
      <h1 class="col-span-2">How Are you</h1>
      <h1>How Are you</h1>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class HostStuffPage {}
