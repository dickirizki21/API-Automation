const request  = require('supertest')("https://kasir-api.belajarqa.com/");
// import chai
const expect = require('chai').expect;

// describe("login", () => {
//   it("Login Page Kasir Aja", async () => {

//     const reqBody = {
//       email: 'admin@tokoomdikjaya.com',
//       password: 'Omdik12345'
//     };
//     const response = await request.post('authentications').send(reqBody);
//     // console.log(await response.body);

//     // Assert
//     expect(await response.body.status).to.equal("success");
//     // expect(await response.body.data.length).to.equal(6);

//   })
// })

// describe("Registration", () => {
//   it("Registrasi User Kasir Aja", async () => {

//     const reqBody = {
//       name: 'Toko Test API Automation',
//       email: 'admin@tokoomdikjaya.com',
//       password: 'Omdik12345'
//     };
//     const response = await request.post('registration').send(reqBody);
//     // console.log(await response.body);

//     // Assert
//     expect(await response.body.status).to.equal("success");
//     // expect(await response.body.data.length).to.equal(6);

//   })
// })

describe("List User", () => {
  it("List User Kasir Aja", async () => {
    const reqBody = {
      email: 'admin@tokoomdikjaya.com',
      password: 'Omdik12345'
    };
    const login = await request.post('authentications').send(reqBody);

    const response = await request.get('users').set('Authorization', `Bearer ${login.body.data.accessToken}`);
    // console.log(await response.body.data.users);  
    // console.log(await response.body);  

    // Assert
    expect(await response.body.status).to.equal("success");
    expect(await response.body.data.users.length).to.equal(7);

  })
})

