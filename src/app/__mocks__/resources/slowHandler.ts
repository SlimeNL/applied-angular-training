import { delay, http, HttpResponse } from 'msw';
import { ExpectedSampleResources } from './data';

export default [
  http.get('https://api.jeff-gonzalez-fake-server.com/developer/resources', async () => {
    await delay(5000);
    return HttpResponse.json(ExpectedSampleResources);
  }),
];
