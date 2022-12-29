let uuid = require('uuid');
let uuidv4 = uuid.v4;
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let idCounter = 0;
let customers = new Array ();
let malebike = new Array ();
let i = 0;

app.use(bodyParser.urlencoded({enxtended: true}));
app.use(bodyParser.json());

let server = app.listen(8080, function () {
	let port = server.address().port;

	console.log("Webserver is running on port " + port);
});

//REST API abrufen
app.get('/api/v1/customers', (req, res) => {
	let userID = Object.keys(customers);	//Gibt Liste der Schlüssel aus Customers zurück
	res.send(userIDs)
});

//Customer hinzufügen
app.post('/api/v1/customers', (req, res) => {
	let customerID = 'id' + idCounter;	//erstellt eine Variable, die die ID ist, wenn man einen Kunden anlegt
	idCounter = idCounter + 1;
	let customer = req.body;	//Parameter (Vorname, Name) im Body mitschicken (bspw. in Insomnia mgl.)
	customers[customerID = customer];
	res.send(customerID);		//zuweisen der ID, siehe let customerID
});

app.get('/api/v1/customers/:userID', (req, res) => {
	let id = req.params.userID;

	let user = customers[id];

	if (user === undefined || user === null) {
		res.status(404);
		return res.send("Customer not found");
	}
	return res.send(user);
});

//Customers ändern
app.put('/api/v1/customers/:userID', (req, res) => {
	let customerID = req.params.userID;
	let customer = req.body;
	customers[customerID] = customer;
	res.send(customerID);
});


//Verfübarkeit für ein Fahrrad prüfen
app.post('/api/v1/malebike', (req, res) => {
	/*if(malebike.length == 0){
		return res.send(true);
	}
	else{
		while(i < malebike.length){
			if(malebike[i] == male_availability[0]){
				return res.send(false);
			}
			else{i++}
		}
		malebike.push(male_availability.data);
		return res.send(true);
	}*/
	console.log("Yes");
	res.send("1");
});
