const apiKey = "002bdfb3623ab6b687fb7cf7cc62b455"
const lang = "pt_br"
const units = "metric"

const app = angular.module("weatherApp", [])

app.controller("WeatherController", function ($scope, $http) {
    $scope.city = ""
    $scope.cardActive = false

    $scope.temperature = ""
    $scope.feelsLike = ""
    $scope.minTemperature = ""
    $scope.maxTemperature = ""
    $scope.humidity = ""
    $scope.windVelocity = ""
    $scope.windOrientation = ""
    $scope.iconUrl = ""
    $scope.cityName = ""

    $scope.callApi = async () => {
        const selectedCity = $scope.city || localStorage.getItem("city") || "São Paulo"

        const response = await $http.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=${units}&lang=${lang}`
        )

        const { data } = response

        const iconCode = data.weather[0].icon
        $scope.iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`

        $scope.temperature = Math.round(data.main.temp)
        $scope.feelsLike = Math.round(data.main.feels_like)
        $scope.minTemperature = Math.round(data.main.temp_min)
        $scope.maxTemperature = Math.round(data.main.temp_max)
        $scope.humidity = data.main.humidity
        $scope.windVelocity = data.wind.speed.toLocaleString()
        $scope.windOrientation = data.wind.deg
        $scope.cityName = data.name

        localStorage.setItem("city", $scope.cityName)

        $scope.cardActive = true
        $scope.$apply()
    }

    $scope.callApi()
})
