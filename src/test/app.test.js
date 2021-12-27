const app = require('../app');
const supertest = require('supertest');

const request = supertest(app);

describe('POST /records : ', () => {
  test('response should right format', async () => {
    const response = await request.post('/records').send({
      startDate: '2016-01-26',
      endDate: '2018-02-02',
      minCount: 2700,
      maxCount: 3000,
    });

    expect(response.status).toBe(200);
    expect(response.body.code).toBe(0);
    expect(response.body.msg).toBe("Success");
  });
  test('empty array if there is no data matching search criteria.', async () => {
    const response = await request.post('/records').send({
      startDate: '2016-01-26',
      endDate: '2018-02-02',
      minCount: 4000,
      maxCount: 3000,
    });

    expect(response.status).toBe(404);
    expect(response.body.code).toBe(1);
    expect(response.body.msg).toBe("There is no data matching your search criteria.");
  });
});
