const knex = require('../db/knex');

describe('CRUD Stickers', () => {
    before((done) => {
    //run migrations
        knex.migrate.latest()
            .then(() => {
                //run seeds
                return knex.seed.run();
            }).then(() => done());
    });
    it('Work... ', function () {
        console.log('Its working!');
    });
});