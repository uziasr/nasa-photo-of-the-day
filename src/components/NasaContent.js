import React, { useState, useEffect } from 'react'
import {NasaLayout} from './NasaLayout'
import axios from "axios";


export default function NasaContent(){
    
    const [nasaObject, setNasaObject] = useState({})
    useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        const nasaData = response.data;
        setNasaObject(nasaData)
        console.log(setNasaObject)
    })
    .catch(error=>console.log(error))
    },[])
    return(
        <div className='article'>
            <NasaLayout id={1}
            hdurl={nasaObject.hdurl}
            copyright = {nasaObject.copyright}
            title = {nasaObject.title}
            explanation = {nasaObject.explanation}
            date = {nasaObject.date}
            />
        </div>
    )
}