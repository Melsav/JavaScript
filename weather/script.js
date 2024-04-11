function getWeather() {
    var villeInput = document.getElementById('ville');
    var ville = villeInput.value;

    // Remplacez 'VOTRE_CLE_API' par votre clé API OpenWeatherMap
    var apiKey = 'ae389c751139d10e6c783635a12a3b6e';
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&units=metric&appid=' + apiKey;

    // Utilisez une requête AJAX pour récupérer les données météo depuis l'API
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var reponse = JSON.parse(xhr.responseText);
            afficherResultat(reponse);
        }
    };
    xhr.open('GET', apiUrl, true);
    xhr.send();
}

function afficherResultat(data) {
    var resultatMeteo = document.getElementById('resultatMeteo');
    resultatMeteo.innerHTML = '';

    // Affichez les informations météo pertinentes ici, par exemple :
    var temperature = '<strong>Température :</strong> ' + data.main.temp + '°C';
    var humidite = '<strong>Humidité :</strong> ' + data.main.humidity + '%';
    var vent = '<strong>Vitesse du vent :</strong> ' + data.wind.speed + ' m/s';

    var resultHtml = '<p>' + temperature + '</p>';
    resultHtml += '<p>' + humidite + '</p>';
    resultHtml += '<p>' + vent + '</p>';

    resultatMeteo.innerHTML = resultHtml;
}
