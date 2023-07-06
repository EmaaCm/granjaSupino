function mostrarPosicion(posicion) {

    let clima = document.getElementById ("clima");
    let lat = posicion.coords.latitude;
    let long = posicion.coords.longitude;
    let key = "473a4d3b6c50e33a1cec0eb89c9b7543";

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => {

            clima.innerHTML = `<p>UBICACION : ${data.name}</p>
                                            <p>T° : ${data.main.temp}</p>
                                            <p>T° MAX : ${data.main.temp_max}</p>
                                            <p>T° MIN : ${data.main.temp_min}</p>`
        })

}

navigator.geolocation.getCurrentPosition(mostrarPosicion);