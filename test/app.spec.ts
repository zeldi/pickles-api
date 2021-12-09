import app from "../src/app";
import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;

/* sample JSON payload for unit test */
const data = {
  "id": "123",
  "name": "zeldi",
  "email": "zeldi.syd@outlook.com" 
}

describe("Testing GET (/) endpoint", () => {
  it("It should return 'Welcome to Pickle API' on call", async () => {
    return chai
      .request(app)
      .get("/")
      .then(res => {
        chai.expect(res.text).to.eql("Welcome to Pickle API");
      });
  });
});

describe('Testing Healthcheck (/healthz) endpoint', () => {
	it('It should return 200 if API service is healthy', async () => {
    return chai
      .request(app)
      .get("/healthz")
      .then( res => {
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body.uptime).greaterThan(0);
      })
	});

});

describe("Testing POST /api/data endpoint", () => {
  it("It should return 'User data has been sent to email' on call", async () => {
    return chai
      .request(app)
      .post("/api/data")
      .send(data)
      .then(res => {
        chai.expect(res.body).have.property('message').that.eql("User data has been sent to email");
      });
  });
});