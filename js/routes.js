let controller = require('./controller');

module.exports.initialize = function(app, router) {
    router.get('/', controller.index);

    router.get('/login', controller.showLogin);
    router.post('/login', controller.processLogin);

    router.post('/book', controller.addBooking); //anpassen!
    router.post('/book/:id/rides', controller.bookedRides);

    app.use('/', router);

};