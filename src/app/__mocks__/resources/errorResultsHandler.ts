import { HttpErrorResponse } from '@angular/common/http';
import { http, HttpHandler, delay, HttpResponse } from 'msw';

export default [
  http.get('https://api.jeff-gonzalez-fake-server.com/developer/resources', async () => {
    await delay();
    throw new HttpErrorResponse({
      status: 500,
      statusText: 'Sheila Spilled Beer on the Server',
    });
  }),
] as HttpHandler[];
