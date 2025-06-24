const request = require('supertest');
const app = require('../server'); // adjust if your server is in a different file

describe('GET /api/recipes', () => {
  it('should return recipes for a valid query', async () => {
    const response = await request(app)
      .get('/api/recipes?q=egg&mealType=Breakfast')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.hits).toBeDefined();
    expect(Array.isArray(response.body.hits)).toBe(true);
  }, 10000); // increase timeout if needed
});
