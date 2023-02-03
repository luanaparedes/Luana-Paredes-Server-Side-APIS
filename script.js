const cityInput = document.querySelector('#search-input');
const submitButton = document.querySelector('#submit-search');
const cityDate = document.querySelector('#city-date')
const currentTemp = document.querySelector('#temp')
const currentWind = document.querySelector('#wind')
const currentHumidity = document.querySelector('#humidity')
const fiveDay = document.querySelector("#five-day")

var getWeather = function (city) {
    var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=0dbb72611d1899922829fe7a5e084e95&units=imperial";
     fetch(weatherApi)
     .then( function(response) {
        return response.json()
     })
     .then( function(data) {
        console.log(data)
        var currentDate = moment(data.dt, "X").format(" (MM/DD/YYYY) ")
        cityDate.innerHTML = data.name + currentDate + "<img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'>"
        currentTemp.innerHTML = "<p>Temp: " + data.main.temp + " </p>" 
        currentWind.innerHTML = "<p>Wind: " + data.wind.speed + " </p>"
        currentHumidity.innerHTML = "<p>Humidity: " + data.main.humidity + " </p>"
        fiveDayWeather(city)
     }) 
};

var citySubmit = function (e) {

    e.preventDefault();

    var cityName = cityInput.value.trim();
    getWeather(cityName);
};

var fiveDayWeather = function (city) {

    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=0dbb72611d1899922829fe7a5e084e95&units=imperial";

    fetch(url)
    .then(function (response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        fiveDay.innerHTML=""
         for (let i = 2; i < data.list.length; i= i+8) {
            console.log(data.list[i])
            fiveDay.innerHTML+=`<div class="col-sm-2 mb-3 mb-sm-0">
            <div class="card row">
              <div class="card-body">
                <h5 class="card-title">${moment(data.list[i].dt,"X").format("MM/DD/YYYY")}</h5>
                <p class="five-img"></p>
                <p class="five-temp">Temp: ${data.list[i].main.temp}</p>
                <p class="five-wind">Wind: ${data.list[i].wind}</p>
                <p class="five-humidity">Humidity: ${data.list[i].main.humidity}</p>
              </div>
            </div>
          </div>`
         }
    })
}

submitButton.addEventListener('click', citySubmit)