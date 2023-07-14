import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import UserModel from '../database/models/UserModel';
import { Response } from 'superagent';
import loginMock from './mockFiles/loginMock';
import userMock from './mockFiles/userMock';
chai.use(chaiHttp);

const { expect } = chai;

describe('/login test', function () {
    afterEach(function () {
        sinon.restore();
      });
    it('trying with correct user and password', async function () {
        sinon.stub(UserModel, 'findOne').resolves(new UserModel(userMock));
        const chaiHttpResponse = await chai
            .request(app)
            .post('/login')
            .send(loginMock);
        expect(chaiHttpResponse.status).to.be.eq(200);
        expect(chaiHttpResponse.body).to.haveOwnProperty('token');
    })
    it('trying with wrong user', async function () {
        sinon.stub(UserModel, 'findOne').resolves(null);
        const chaiHttpResponse = await chai
            .request(app)
            .post('/login')
            .send(loginMock);
        expect(chaiHttpResponse.status).to.be.eq(401);
    })
    it('trying with wrong password', async function () {
        sinon.stub(UserModel, 'findOne').resolves(new UserModel(userMock));
        const chaiHttpResponse = await chai
            .request(app)
            .post('/login')
            .send({ ...loginMock, password: 'wrongPassword' });
        expect(chaiHttpResponse.status).to.be.eq(401);
    })
})