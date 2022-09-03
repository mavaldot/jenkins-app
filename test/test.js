const { expect } = require('chai');
const chai = require('chai');
const supertest = require('supertest');
const server = require('../server');

describe('Hola', () => {

    describe('/GET Hola', () => {
        it('it should get Hola', async () => {
            const response = await supertest(server).get('/hola');
            console.log('hello');
            expect(response.status).to.eql(200);
            expect(response.body.msg).to.eql('hola');
        });
    });
});