const { Dogs,Temperaments, conn } = require('../../src/db.js');
const { describe,before,it} = require('chai');


describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dogs.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dogs.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dogs.create({ name: 'Pug' });
      });
    });
  });
});

describe('Temperament model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Temperaments.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Temperaments.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Temperaments.create({ name: 'Assertive' });
      });
    });
  });
});
