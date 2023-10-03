import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import MatchesModel from '../database/models/MatchesModel';
import { Response, Request } from 'superagent';
import matchesMock from './mockFiles/allMatches';
import { Model } from 'sequelize';
import IMatchResponse from '../Interfaces/IMatchResponse';
import MatchesService from '../service/MatchesService';
import idValidator from '../middlewares/idMiddleware';
import jwt from '../../src/Utils/jwt';
import joi from '../middlewares/joiSchemas';

chai.use(chaiHttp);

const { expect } = chai;

describe('testing route /matches', function () {
    afterEach(function () {
        sinon.restore();
    })
    it('testing route /matches', async function () {
        sinon.stub(MatchesModel, 'findAll').resolves(matchesMock.matchesMock as any);
        sinon.stub(MatchesService, 'mappingResponse').returns(matchesMock.responseMock as any);
        const chaiHttpResponse = await chai
            .request(app)
            .get('/matches');
        expect(chaiHttpResponse.status).to.be.eq(200);
        expect(chaiHttpResponse.body).to.be.deep.eq(matchesMock.responseMock);
    })
    it('testing route /matches?inProgress=false', async function () {
        sinon.stub(MatchesModel, 'findAll').resolves(matchesMock.matchesMock as any);
        sinon.stub(MatchesService, 'mappingResponse').returns(matchesMock.responseMock as any);
        const chaiHttpResponse = await chai
            .request(app)
            .get('/matches?inProgress=false');
        expect(chaiHttpResponse.status).to.be.eq(200);
        expect(chaiHttpResponse.body).to.be.deep.eq(matchesMock.responseMock);
    })
    it('testing route /matches?inProgress=true', async function () {
        sinon.stub(MatchesModel, 'findAll').resolves(matchesMock.matchesMock as any);
        sinon.stub(MatchesService, 'mappingResponse').returns(matchesMock.responseMockTrue as any);
        const chaiHttpResponse = await chai
            .request(app)
            .get('/matches?inProgress=true');
        expect(chaiHttpResponse.status).to.be.eq(200);
        expect(chaiHttpResponse.body).to.be.deep.eq(matchesMock.responseMockTrue);
    })
    // it('testando a função mappingResponse', async function () {
    //     const response = MatchesService.mappingResponse([matchesMock.matchesMock] as any);
    //     expect(response).to.be.deep.eq(matchesMock.responseMock);
    // })
    it('testing route /matches/:id/finish', async function () {
        sinon.stub(jwt, 'verify').returns({ id: 1, email: 'email@email.com' });
        sinon.stub(MatchesModel, 'findByPk').resolves(matchesMock.matchesMockTrue[0] as any);
        sinon.stub(MatchesModel.prototype, 'update').resolves(matchesMock.matchesMock[0] as any);
        const chaiHttpResponse = await chai
            .request(app)
            .put('/matches/1/finish')
            .set({authorization: 'Bearer token'});
        expect(chaiHttpResponse.status).to.be.eq(200);
        expect(chaiHttpResponse.body).to.be.deep.eq({ message: 'Finished' });
    })
});