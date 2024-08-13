//Import Icons.
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {weatherIcons} from '../assets/icons'


//Display Card.
function Card(props){

    function formatDate(dateString) {
        const date = new Date(dateString + 'T00:00:00');
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        let dateReturn = date.toLocaleDateString('en-US', options);
        return dateReturn;
    }
    

    return(
        <div className="bg-neutral-50 p-4 rounded-lg shadow-lg text-center hover:bg-custom-dark hover:text-white flex flex-col justify-center items-center">
            <h3 className="text-lg"><FontAwesomeIcon icon="fa-regular fa-calendar" className='mr-2'/>{formatDate(props.date)}</h3>
            <img src={weatherIcons[props.weathCode]} alt="weather icon"></img>
            <h3 className='text-lg'>H:{Math.round(props.maxTemp)} L:{Math.round(props.minTemp)}</h3>
        </div>
    );
}

export default Card;