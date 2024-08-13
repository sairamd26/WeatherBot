
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';



function Forecast(props){
  
  if (!props.data) return <></>;

 
  const weatherData = (props.data.daily);
  


  return (
    <div className="container mx-auto mt-10 p-2">
      <h2 className="text-2xl font-bold mb-4"><FontAwesomeIcon icon="fa-regular fa-calendar" className='mr-2'/>5-DAY FORECAST</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {
          weatherData.time.map((item,index)=>(
            <Card 
              key = {index}
              date = {item}
              maxTemp = {weatherData.temperature_2m_max[index]}
              minTemp = {weatherData.temperature_2m_min[index]}
              weathCode = {weatherData.weather_code[index]}
            />
        ))}
      </div>
    </div>
  );
}


export default Forecast;


