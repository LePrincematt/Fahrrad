let bike_id = 0;

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
    console.log("Hat geklappt");
    axios.post('/api/v1/malebike', availability)
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