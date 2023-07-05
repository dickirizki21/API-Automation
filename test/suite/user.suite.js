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
    // expect(await response.body.statusCode).to.equal(401);
    // expect(await response.body.message).to.equal("Missing authentication");

  })

  it("Tambah User Kasir Aja", async () => {
    const loginData = {
      email: 'admin@tokoomdikjaya.com',
      password: 'Omdik12345'
    };

    const dataUser = {
      name: 'Dicki-cukup6',
      email: '',
      password: 'Omdik12345'
    };
    const login = await request.post('authentications').send(loginData);

    const response = await request.post('users').set('Authorization', `Bearer ${login.body.data.accessToken}`).send(dataUser);
    // console.log(await response.body.data.users);  
    // console.log(await response.body);  

    // Assert
    // Positive
    // expect(await response.body.status).to.equal("success");
    // expect(await response.body.data.name).to.equal("Dicki-Cukup 4");

    // negative 
    // expect(await response.body.status).to.equal("fail");
    // expect(await response.body.message).to.contains("name is not allowed to be empty");
    // expect(await response.body.message).to.contains("email is not allowed to be empty");

  })

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
    console.log(await response.body.data.users);  
    console.log(await response.body);  

    // Assert
    // expect(await response.body.status).to.equal("success");
    // expect(await response.body.data.name).to.equal("Dicki-Cukup3");

    // Negative
    // expect(await response.body.status).to.equal("fail");
    // expect(await response.body.message).to.contains('"name" is not allowed to be empty');
    // expect(await response.body.message).to.contains("email is not allowed to be empty");
  })

  it("Delete User Kasir Aja", async () => {
    const loginData = {
      email: 'admin@tokoomdikjaya.com',
      password: 'Omdik12345'
    };

    const login = await request.post('authentications').send(loginData);

    const response = await request.del('users/{}').set('Authorization', `Bearer ${login.body.data.accessToken}`);
    console.log(await response.body);  

    // Assert
    // Positive
    // expect(await response.body.status).to.equal("success");
    // expect(await response.body.data.name).to.equal("Dicki-Cukup3");

    // Negative
    // expect(await response.body.message).to.equal("id tidak valid");

  })
})