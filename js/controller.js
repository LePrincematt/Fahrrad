//let client = require('./client');
let request = require('request');

module.exports= {
    index: function(req, res){
        if (!req.session.userID) {
            res.redirect('/login');
        } else {
            res.redirect('/');
        };
    },
    showLogin: function(req, res) {
        res.render('login');
    },
    processLogin: function(req, res) {
        var userObj = {
            email: req.body.username,
            password: req.body.password
        };

        //res.redirect('/'), wenn User gefunden
    },
    addBooking: function(req, res) {
        res.redirect('/');
    },
    bookedRides: function(req, res) {
        res.json('success');
    }
};