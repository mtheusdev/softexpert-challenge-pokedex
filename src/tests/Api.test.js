import api from '../api/index';

describe('tests to api (axios)', () => {
  test('Must return an object after the request to the api', async () => {
    const data = await api.get();
    expect(data.status).toEqual(200);
  });
});
