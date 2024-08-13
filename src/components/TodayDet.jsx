//Import Fonts and Icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img404 from '../assets/404.jpg'
import {sundown, sunup, humidity, wind, weatherIcons} from '../assets/icons'


//Display Today Weather.
function TodayDet(props){

    //If Error.
    if (!props.data) return (
        <div className='container mx-auto mt-20 flex justify-center'>
            <div className='shadow-xl backdrop-blur-md rounded-lg justify-items-center'> 
                <img src={img404} alt='error image' className='h-80 w-80'></img>
                <p className='text-red-700'>Please Enter a VALID location</p>
            </div>
        </div>
    );

    //Get Time and Date.
    const sunrise = (props.data.daily.sunrise[0]).split('T')[1];
    const sunset = (props.data.daily.sunset[0]).split('T')[1];
    
    const currentDateTime = new Date(props.data.current.time);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const currentDate = currentDateTime.toLocaleDateString('en-US', options);
    

    return(
        <div className='container mx-auto mt-20 flex flex-col justify-between md:flex-row gap-4 p-2'>
            <div className='order-2 md:order-1 grid grid-flow-row grid-rows-2 grid-cols-2 gap-4 h-80 shadow-xl backdrop-blur-md w-full md:w-2/3 rounded-lg'> 
                <div className='grid grid-cols-1 justify-items-center items-center p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-custom-dark hover:text-white duration-300'>
                    <h2 className='text-xl font-semibold'><img src={sunup} alt='sunrise' className='mt-2'></img>Sunrise</h2>
                    <h3 className='text-lg'>{sunrise}</h3>
                </div>
                <div className='grid grid-cols-1 justify-items-center items-center p-2  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-custom-dark hover:text-white duration-300'>
                    <h2 className='text-xl font-semibold'><img src={sundown} alt='sunrise' className='mt-2'></img>Sunset</h2>
                    <h3 className='text-lg'>{sunset}</h3>
                </div>
                <div className='grid grid-cols-1 justify-items-center items-center p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-custom-dark hover:text-white duration-300'>
                    <h2 className='text-xl font-semibold'><img src={humidity} alt='sunrise' className='mt-2'></img>Humidity</h2>
                    <h3 className='text-lg'>{props.data.current.relative_humidity_2m}%</h3>
                </div>
                <div className='grid grid-cols-1 justify-items-center items-center p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-custom-dark hover:text-white duration-300'>
                    <h2 className='text-xl font-semibold'><img src={wind} alt='sunrise' className='mt-2'></img>Wind</h2>
                    <h3 className='text-lg'>{props.data.current.wind_speed_10m} km/h</h3>
                </div>
            </div>
            <div className='order-1 md:order-2 grid grid-cols-1 bg-neutral-50 w-full md:w-1/3  shadow-xl rounded-lg justify-items-center items-center p-4'>
                <h3 className='text-lg'><FontAwesomeIcon icon="fa-regular fa-calendar" className='mr-2'/>{currentDate}</h3>
                <h2 className='text-xl font-semibold'><FontAwesomeIcon icon="fa-solid fa-location-dot" className='mr-2'/>{props.place.charAt(0).toUpperCase()+props.place.slice(1)}</h2>
                <h1 className='text-5xl font-bold'>{Math.round(props.data.current.temperature_2m)}</h1>
                <img src={weatherIcons[props.data.current.weather_code]}></img>
                <h3 className='text-lg'>H:{Math.round(props.data.daily.temperature_2m_max[0])} L:{Math.round(props.data.daily.temperature_2m_min[0])}</h3>
            </div>
        </div>
    );
}


export default TodayDet;