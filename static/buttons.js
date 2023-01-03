let current_bike_date = {date: "0", number: 0};

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
    current_bike_date.date.push(document.getElementById('date_bike').value);
    console.log("Hat geklappt");
    axios.post('/api/v1/checkAvailability', availability)
    .then(function (res) {
        console.log(res);
        console.log(res.number);
        if(res.data == "0") {
            location.href = "availability.html";
        }
        else {
            current_bike_date.number.push(res.body.number);
            console.log(current_bike_date);
            //location.href = "booking.html";
            console.log("Datum bestätigt");
        }
    })
};


//Anzahl der Fahrräder ausgeben
function checkNumber() {
    console.log(current_bike_date);
    console.log("Numbers");
    let html_date = "<div>";
    let html_objnumber = "<div>";
    let objdate = current_bike_date[0].toString(); 
    let objnumber = current_bike_date[1].toString();
    console.log(objdate);
    console.log(objnumber);
    html_date += "<p>";
    html_date += objdate;
    html_date += "</p>";
    html_date += "</div>";
    html_objnumber += "<p>";
    html_objnumber += current_bike_date[1].toString();
    html_objnumber += "</p>";
    html_objnumber += "</div>";
    document.getElementById("return_availability").innerHTML = html_date;
    document.getElementById("return_number").innerHTML = html_objnumber;
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