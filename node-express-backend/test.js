import chai from 'chai';
import chaiHttp from 'chai-http';

const expect = chai.expect;

chai.use(chaiHttp);

describe('POST /api/addInfo', () => {
  it('should return 206 status code with missing email field', async () => {
    const res = await chai
      .request('http://localhost:8000') // Make request to the running Express app
      .post('/api/addInfo')
      .send({
        name: 'John Doe',
        movie: 'Taken 3'
      });

    expect(res).to.have.status(206);
  });

  it('should return 200 status code with all necessary fields', async () => {
    const res = await chai
      .request('http://localhost:8000') // Make request to the running Express app
      .post('/api/addInfo')
      .send({
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        password: 'Legally Blonde 2'
      });

    expect(res).to.have.status(200);
  });
});
