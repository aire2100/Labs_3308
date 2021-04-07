// Imports the server.js file to be tested.
let server = require("../server");
//Assertion (Test Driven Development) and Should, Expect(Behaviour driven development) library
let chai = require("chai");
// Chai HTTP provides an interface for live integration testing of the API's.
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp); 
const { expect } = chai;
var assert = chai.assert;




describe("Server!", () => {

    // Sample test case given to test / endpoint. 
    it("Returns the default welcome message", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equals("success");
          assert.strictEqual(res.body.message, "Welcome!");
          done();
        });
    });

    // Please add your test cases here.
    
    it("Is of Type Array", done =>{
      chai
        .request(server)
        .get("/operations")
        .end((err, response) => {
          expect(response.body).to.be.an('array');
          expect(response.body).to.not.be.empty;
          done();
        });
    });

    it("Get id = 1, name = add, sign = +", done =>{
      chai
        .request(server)
        .get("/operations/1")
        .end((err, response) => {
          expect(response.body.id).to.equals(1);
          expect(response.body.name).to.equals('Add');
          expect(response.body.sign).to.equals('+');
          done();
        });
    });

    it("POST id =4, name = Divide, sign = /", done =>{
      chai
        .request(server)
        .post("/operations")
        .set('content-type', 'application/json')
        .send({name: 'Divide', sign: '/'})
        .end((err, response) => {
          expect(response.body.id).to.equals(4);
          expect(response.body.name).to.equals('Divide');
          expect(response.body.sign).to.equals('/');
          done();
        });
    });



  });