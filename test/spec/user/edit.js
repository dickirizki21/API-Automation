const request  = require('supertest')("https://kasir-api.belajarqa.com/");
// import chai
const expect = require('chai').expect;

describe("Edit User", () => {
  it("Edit User Kasir Aja", async () => {
    const loginData = {
      email: 'admin@tokoomdikjaya.com',
      password: 'Omdik12345'
    };

    const dataUser = {
      name: 'update-name',
      email: 'updateemail@tokoomdikjaya.com',
    };
    const login = await request.post('authentications').send(loginData);

    const response = await request.put('users/2a8b6dda-f7a2-4b60-8c81-07de9f6472b5').set('Authorization', `Bearer ${login.body.data.accessToken}`).send(dataUser);
    // console.log(await response.body.data.users);  
    console.log(await response.body);  

    Assert
    expect(await response.body.status).to.equal("success");
    expect(await response.body.data.name).to.equal("Dicki-Cukup3");

    // Negative
    expect(await response.body.status).to.equal("fail");
    expect(await response.body.message).to.contains('"name" is not allowed to be empty');
    expect(await response.body.message).to.contains("email is not allowed to be empty");
  })
})
