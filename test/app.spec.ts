import app from "../src/app";
import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";

chai.use(chaiHttp);
const expect = chai.expect;
const data = {
  "id": "123",
  "name": "zeldi",
  "email": "zeldi.syd@outlook.com" 
}

describe("Testing GET (/) endpoint", () => {
  it("should return 'Welcome to Pickle API' on call", async () => {
    return chai
      .request(app)
      .get("/")
      .then(res => {
        chai.expect(res.text).to.eql("Welcome to Pickle API");
      });
  });
});

describe("Testing POST /api/data endpoint", () => {
  it("should return 'User data has been sent to email' on call", async () => {
    return chai
      .request(app)
      .post("/api/data")
      .send(data)
      .then(res => {
        chai.expect(res.body).have.property('message').that.eql("User data has been sent to email");
      });
  });
});