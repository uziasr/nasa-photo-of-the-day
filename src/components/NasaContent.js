import React, { useState, useEffect } from 'react'
import {NasaLayout} from './NasaLayout'
import axios from "axios";


export default function NasaContent(){
    const [date, setDate] = useState(dateFormat())
    const [nasaObject, setNasaObject] = useState({})
    const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date='
    
    function dateFormat(today=(new Date())){
        //let today = new Date()
        //console.log('this is the the date',today)
        if(today=(new Date())){
        let month = (today.getUTCMonth() + 1);
        let day = today.getUTCDate();
        let year = today.getUTCFullYear();
        let newDate = `${year}-${month}-${day}`
        return newDate}
        else{
            return date
        }
    }
    function previousDay(aDate){
        let date = aDate.split('-')
        date[2] = date[2] - 1 
        console.log(date.join('-'))
        return(date.join('-'))
    }

    function isToday(){
        return (dateFormat()===dateFormat(date))
    }
    console.log(isToday())
    
    useEffect(()=>{
    
    axios
    .get(`${url}${date}`)
    .then(response => {
        const nasaData = response.data;
        setNasaObject(nasaData)
        console.log(`${url}${date}`)
    })
    .catch(error=>console.log(error))
    },[date])
    return(
        <div className='article'>
            <NasaLayout id={1}
            hdurl={nasaObject.hdurl}
            copyright = {nasaObject.copyright}
            title = {nasaObject.title}
            explanation = {nasaObject.explanation}
            date = {nasaObject.date}
            />
            <button onClick={() =>{ setDate(previousDay(date))} }>Yesterday</button>
        </div>
    )
}