export function getWeatherIcons(code: string) {
    switch (code) {
        case '01d':
            return 'https://cdn.weatherapi.com/weather/64x64/day/113.png'
        case '01n':
            return 'https://cdn.weatherapi.com/weather/64x64/night/113.png'
        case '02d':
            return 'https://cdn.weatherapi.com/weather/64x64/day/116.png'
        case '02n':
            return 'https://cdn.weatherapi.com/weather/64x64/night/116.png'
        case '03d':
            return 'https://cdn.weatherapi.com/weather/64x64/day/119.png'
        case '03n':
            return 'https://cdn.weatherapi.com/weather/64x64/night/119.png'
        case '04d':
            return 'https://cdn.weatherapi.com/weather/64x64/day/122.png'
        case '04n':
            return 'https://cdn.weatherapi.com/weather/64x64/night/122.png'
        case '09d':
            return 'https://cdn.weatherapi.com/weather/64x64/day/143.png'
        case '09n':
            return 'https://cdn.weatherapi.com/weather/64x64/night/143.png'
        case '10d':
            return 'https://cdn.weatherapi.com/weather/64x64/day/305.png'
        case '10n':
            return 'https://cdn.weatherapi.com/weather/64x64/night/305.png'
        case '11d':
            return 'https://cdn.weatherapi.com/weather/64x64/day/200.png'
        case '11n':
            return 'https://cdn.weatherapi.com/weather/64x64/night/200.png'
        case '13d':
            return 'https://cdn.weatherapi.com/weather/64x64/day/338.png'
        case '13n':
            return 'https://cdn.weatherapi.com/weather/64x64/day/338.png'
        case '50d':
            return 'https://cdn.weatherapi.com/weather/64x64/day/248.png'
        case '50n':
            return 'https://cdn.weatherapi.com/weather/64x64/night/248.png'
    }
}