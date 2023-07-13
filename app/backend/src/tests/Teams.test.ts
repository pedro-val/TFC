import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;
import mockTeamList from './mockFiles/teamsList';

describe('/teams route integration test', function () {
    it('should return 200 OK status', async function () {
        const chaiHttpResponse = await chai
            .request(app)
            .get('/teams');

        expect(chaiHttpResponse.status).to.be.eq(200);
        expect(chaiHttpResponse.body).to.be.deep.eq(mockTeamList);
    })
})