import { HttpErrorResponse } from '@angular/common/http';
import { http, HttpHandler, delay, HttpResponse } from 'msw';

const user = {
  sub: '8c5cda73-b2d9-4dc8-9356-64e1304ddb3b',
  name: 'Jeff Gonzalez',
  given_name: 'Jeff',
  family_name: 'Gonzalez',
  preferred_username: 'Jeff',
  email: 'jeff@compuserve.com',
  role: ['Instructor', 'Employee'],
};
export default [
  http.get('/api/user/', async () => {
    await delay();
    // throw new HttpErrorResponse({
    //   status: 500,
    //   statusText: 'Internal Server Error',
    // });
    return HttpResponse.json(user);
  }),
] as HttpHandler[];
