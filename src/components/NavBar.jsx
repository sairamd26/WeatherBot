import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import logo from "../assets/main.png";

//Nav Display.
function NavBar(props){

    const [input, setInput] = useState('');

    const updateLocation = (event) => {
        setInput(event.target.value);
    };
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.onSearch(input)
        setInput('');
    };
    

    return(
        <div className='flex justify-center p-2'>
            <div className="container mx-auto p-4 rounded-lg mt-6 bg-neutral-50 flex justify-between shadow-xl">
            <div className='flex p-2'>
                <img src={logo} className='h-8 w-8 pr-2'></img>
                <h1 className='text-2xl font-bold'>WEATHER BOT</h1>
            </div>
            <div className="relative">
                <form onSubmit={handleFormSubmit} className="p-2 border border-black rounded-full flex items-center">
                    <i>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </i>
                    <input onChange={updateLocation}  value={input} type="text" placeholder="City Name..." className="ml-2 text-sm bg-neutral-50 focus:outline-none"/>
                </form>
            </div>
        </div>
        </div>   
    );
} 

export default NavBar;