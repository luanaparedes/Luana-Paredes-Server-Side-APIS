var weatherApi = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

function createPage() {
    var container = document.getElementsByClassName('container')
    container.innerHTML+=
    `<div class="row">
    <div class="col-sm-8">col-sm-8</div>
    <div class="col-sm-4">col-sm-4</div>
    </div>`
}