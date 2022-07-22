process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../index');
const conn = require("../../../utils/db")

describe('POST /user', () => {
  before((done) => {
    conn.connect()
      .then(() => done())
      .catch((err) => done(err));
  })

  after((done) => {
    conn.close()
      .then(() => done())
      .catch((err) => done(err));
  })

  it('OK, creating a new user works', (done) => {
    request(app).post('/skill')
      .send({"email": "abc@gmail.com",
        "password": "123456788",
     })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('email');
        expect(body).to.contain.property('password');
        done();
      })
      .catch((err) => done(err));
  });

  it('Fail, note requires password', (done) => {
    request(app).post('/user')
      .send({"email": "abc@gmail.com",
        })
      .then((res) => {
        const body = res.body;
        expect(body.errors.text.name)
          .to.equal('ValidatorError')
        done();
      })
      .catch((err) => done(err));
  });
})