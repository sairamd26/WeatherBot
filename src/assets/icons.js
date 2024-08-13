//Import the Icons.
import sunup from './sunrise.png'
import sundown from './sunset.png'
import sunny from './sunny.png'
import cloudy from './cloudy.png'
import rain from './rain.png'
import snow from './snow.png'
import thunder from './thunderstrom.png'
import humidity from './humidity.png'
import wind from './wind.png'


const weatherIcons = {
    0: sunny,
    1: sunny,
    2: cloudy,
    3: cloudy,
    45: cloudy,
    48: cloudy,
    51: rain,
    53: rain,
    55: rain,
    56: rain,
    57: rain,
    61: rain,
    63: rain,
    65: rain,
    66: rain,
    67: rain,
    71: snow,
    73: snow,
    75: snow,
    77: snow,
    80: rain,
    81: rain,
    82: rain,
    85: snow,
    86: snow,
    95: thunder,
    96: thunder,
    99: thunder
};

export {sundown, sunup, humidity, wind, weatherIcons};