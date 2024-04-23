export function data() {
    return fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_APP_WEATHERAPI_KEY}&q=Dhaka`)
        .then(response => response.json())
}