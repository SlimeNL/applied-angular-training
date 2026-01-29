import { HttpErrorResponse } from '@angular/common/http';
import { http, HttpHandler, delay, HttpResponse } from 'msw';

export default [
  http.get('/api/user/', async () => {
    await delay();
    throw new HttpErrorResponse({
      status: 401,
      statusText: 'Unauthorized',
    });
  }),
] as HttpHandler[];
