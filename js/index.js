/*let uuid = require('uuid');
let uuidv4 = uuid.v4;
let path = require('path');
let routes = require('./routes');
let express = require('express');
let exphbs = require('express-handlebars');
let app = express();
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

module.exports = function(app) {
	app.set('port', process.env.PORT || 8080);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'handlebars');

	app.engine('handlebars', exphbs.create({
		defaultLayout: 'main',
		layoutsDir: app.get('views') + '/layouts'
	}).engine);

	app.use(bodyParser.urlencoded({enxtended: true}));
	app.use(bodyParser.json());
	app.use(cookieParser('key'));
	app.use(session({
		secret: 'key',
		saveUnitialized: true, 
		resave: true
	}));

	app.use('/public/', express['static'](path.join(__dirname, '/public')))

	routes.initialize(app, new express.Router());

	return app;
};

/*let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var users = {}


app.get('/', function(req, res) {
	res.send('Hello World');
})

let server = app.listen(8080, function () {
	var host = server.address().address
	var port = server.address().port

	console.log("Webserver is running at http://%s:%s", host, port)
})
app.use('/public/', express['static'] (path.join(__dirname, '/public')));
routes.initialize(app, new express.Router());

app.get('/api/v1/users/:userId', (req, res) => {

	let randomuserid = uuidv4();
	let user = {vorname: "Anne", nachname: "Musterfrau", userid: randomuserid}
	users[randomuserid] = user;


//	let user = {vorname: "Anne", nachname: "Musterfrau", userid: `${req.params.userId}`}
	return res.send(user);
});*/