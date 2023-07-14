import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';
import TeamModel from '../database/models/TeamModel';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;
import mockTeamList from './mockFiles/teamsList';
import { mockTeam, notFound } from './mockFiles/teamMock';
import ITeams from '../Interfaces/ITeams';

describe('/teams route integration test', function () {
    afterEach(function () {
        sinon.restore();
      });
    it('should return 200 OK status', async function () {
        sinon.stub(TeamModel, 'findAll').resolves(mockTeamList.map(item => new TeamModel(item)));
        const chaiHttpResponse = await chai
            .request(app)
            .get('/teams');

        expect(chaiHttpResponse.status).to.be.eq(200);
        expect(chaiHttpResponse.body).to.be.deep.eq(mockTeamList);
    })
    it('test get teams by correct ID', async function () {
        sinon.stub(TeamModel, 'findByPk').resolves(new TeamModel(mockTeam));
        const chaiHttpResponse = await chai
            .request(app)
            .get('/teams/1');

        expect(chaiHttpResponse.status).to.be.eq(200);
        expect(chaiHttpResponse.body).to.be.deep.eq(mockTeam);
    })
    it('test get teams by incorrect ID', async function () {
        sinon.stub(TeamModel, 'findByPk').resolves(null);
        const chaiHttpResponse = await chai
            .request(app)
            .get('/teams/9999');

        expect(chaiHttpResponse.status).to.be.eq(404);
        expect(chaiHttpResponse.body).to.be.deep.eq(notFound);
    })
})