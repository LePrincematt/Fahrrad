import axios from 'axios';
let male_availability = [];
let html = "<div>";

function malebikeAvailable() {
    male_availability.push(document.getElementById('date_malebike'));
    axios.post('/api/v1/malebike', male_availability).then(function(res) {
        if(res == true) {
            html += "<p>";
            html += "Verfügbar";
            html += "</p>";
            html += "</div>";
            document.getElementById("return_availibility").innerHTML = html;
        }
        else {
            html += "<p>";
            html += "Nicht verfügbar";
            html += "</p>";
            html += "</div>";
            document.getElementById("return_availibility").innerHTML = html;
        }
    })
}