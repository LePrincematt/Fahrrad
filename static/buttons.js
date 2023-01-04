//let current_checkout = new Array();

//Verfügbarkeit prüfen
/*function malebikeAvailable() {
    let male_availability = {
        data: document.getElementById('date_malebike').value
    }
    console.log(male_availability.data);
    console.log("Hat geklappt");
    axios.post('/api/v1/malebike', male_availability)
    .then(function (res) {
        console.log(res);
        let html = "<div>";
        if(res.data == "1") {
            html += "<p>";
            html += "Verfügbar";
            html += "</p>";
            html += "</div>";
            document.getElementById("return_availibility").innerHTML = html;
            console.log("Verfügbar");
        }
        else {
            html += "<p>";
            html += "Nicht verfügbar";
            html += "</p>";
            html += "</div>";
            document.getElementById("return_availibility").innerHTML = html;
            console.log("Nicht verfügbar");
        }
    })
    //location.href = "login.html";

};*/

function checkAvailability(bike_id) {
    let availability = {
        id: bike_id,
        data: document.getElementById('date_bike').value
    }
    console.log(availability.data);
    //current_checkout.push(document.getElementById('date_bike').value);
    axios.post('/api/v1/checkAvailability', availability)
    .then(function (res) {
        console.log(res);
        if(res.data == "0") {
            location.href = "availability.html";
        }
        else {
            //current_checkout.push(res.data.number);
            location.href = "booking.html";
            console.log("Datum bestätigt");
        }
    })
};


//Anzahl der Fahrräder und Datum in der Buchung ausgeben
function checkNumber() {
    axios.post('/api/v1/session', )
    .then(function (res) {
        console.log(res);
        let html_date = "<div>";
        let html_objnumber = "<div>";
        let objdate = res.data[0].toString(); 
        let objnumber = res.data[1].toString();
        html_date += "<p>";
        html_date += objdate;
        html_date += "</p>";
        html_date += "</div>";
        html_objnumber += "<p>";
        html_objnumber += "Fahaaaaaa. "
        html_objnumber += objnumber;
        html_objnumber += "</p>";
        html_objnumber += "</div>";
        document.getElementById("return_availability").innerHTML = html_date;
        document.getElementById("return_number").innerHTML = html_objnumber;
    })
};

//Buchung und Benutzer speichern
function saveBooking() {
    let customer = {
        name: document.getElementById('booking_name').value
    }
    console.log(customer.name);
    console.log("Customer angelegt");
    axios.post('/api/v1/booking', customer)
    .then(function (res) {
        console.log(res);
        let html = "<div>";
        location.href = "booking-successful.html";
    })
};