const request  = require('supertest')("https://kasir-api.belajarqa.com/");
// import chai
const expect = require('chai').expect;

describe("Tambah User", () => {
  it("Tambah User Kasir Aja", async () => {
    const loginData = {
      email: 'admin@tokoomdikjaya.com',
      password: 'Omdik12345'
    };

    const dataUser = {
      name: 'Dicki-cukup5',
      email: '',
      password: 'Omdik12345'
    };
    const login = await request.post('authentications').send(loginData);

    const response = await request.post('users').set('Authorization', `Bearer ${login.body.data.accessToken}`).send(dataUser);
    // console.log(await response.body.data.users);  
    console.log(await response.body);  

    // Assert
    // Positive
    // expect(await response.body.status).to.equal("success");
    // expect(await response.body.data.name).to.equal("Dicki-Cukup 4");

    // negative 
    // expect(await response.body.status).to.equal("fail");
    // expect(await response.body.message).to.contains("name is not allowed to be empty");
    // expect(await response.body.message).to.contains("email is not allowed to be empty");

  })
})