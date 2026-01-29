import { delay, http, HttpResponse } from 'msw';
import { ExpectedSampleResources, MalformedResources } from './data';

export default [
  http.get('https://api.jeff-gonzalez-fake-server.com/developer/resources', async () => {
    await delay();
    return HttpResponse.json(MalformedResources);
  }),
];
