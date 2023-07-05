const request  = require('supertest')("https://kasir-api.belajarqa.com/");
// import chai
const expect = require('chai').expect;

describe("List User", () => {
  it("List User Kasir Aja", async () => {
    const reqBody = {
      email: 'admin@tokoomdikjaya.com',
      password: 'Omdik12345'
    };
    const login = await request.post('authentications').send(reqBody);

    const response = await request.get('users').set('Authorization', ``);
    // console.log(await response.body.data.users);  
    console.log(await response.body);  

    // Assert
    // Positive
    // expect(await response.body.status).to.equal("success");
    // expect(await response.body.data.users.length).to.equal(7);

    // Negative
     expect(await response.body.statusCode).to.equal(401);
    expect(await response.body.message).to.equal("Missing authentication");

  })
})