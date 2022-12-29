//const axios = require('axios'); 
//import axios from 'axios';
//let male_availability = [];
//let html = "<div>";

function malebikeAvailable() {
    //male_availability.push(document.getElementById('date_malebike'));
    let male_availability = {
        data: document.getElementById('date_malebike')
    }
    console.log("Hat geklappt");
    axios.post('/api/v1/malebike', male_availability)
    .then(function (res) {
        let html = "<div>";
        if(res == "1") {
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