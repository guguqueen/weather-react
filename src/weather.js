import React from "react";
import axios from 'axios';
import { Audio } from 'react-loader-spinner';

export default function weather(props){
    function handleResponse(response){
        alert(`The weather in ${response.data.name} ${response.data.main.temp} degrees`)
    }
    let ApiKey = "3a94f3778290bfeee61278505dbbe51d";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${ApiKey}&units=metric`;
    return(
        <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
    )
}