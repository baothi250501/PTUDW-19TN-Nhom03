const home = require('./home');
//const admin = require('./admin');
const manager = require('./manager');
//const relatedPeople = require('./related-people');

function route(app) {

    //app.use('/admin', admin);

    app.use('/manager', manager);

    //app.use('/related-people', relatedPeople);

    app.use('/', home);

}
module.exports = route;