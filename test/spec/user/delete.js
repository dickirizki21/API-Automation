const request  = require('supertest')("https://kasir-api.belajarqa.com/");
// import chai
const expect = require('chai').expect;

describe("Delete User", () => {
  it("Delete User Kasir Aja", async () => {
    const loginData = {
      email: 'admin@tokoomdikjaya.com',
      password: 'Omdik12345'
    };

    const login = await request.post('authentications').send(loginData);

    const response = await request.del('users/{}').set('Authorization', `Bearer ${login.body.data.accessToken}`);
    // console.log(await response.body.data.users);  
    console.log(await response.body);  

    // Assert
    // Positive
    expect(await response.body.status).to.equal("success");
    expect(await response.body.data.name).to.equal("Dicki-Cukup3");

    // Negative
    expect(await response.body.message).to.equal("id tidak valid");

  })
})
