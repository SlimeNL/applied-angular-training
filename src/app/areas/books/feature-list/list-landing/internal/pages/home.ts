import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'ht-home-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout, JsonPipe],
  template: `
    <app-ui-page title="list">
      <pre>{{ booksResource.value() | json }}</pre>
    </app-ui-page>
  `,
  styles: ``,
})
export class HomePage {
  booksResource = httpResource(() => '/api/books');
}
