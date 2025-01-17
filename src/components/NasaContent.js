import React, { useState, useEffect } from 'react'
import {NasaLayout} from './NasaLayout'
import axios from "axios";
import { Container, Row, Button } from "reactstrap";
import styled from "styled-components";

const GoodButton = styled.button`
background:dodgerblue;
padding: 1% 2%;
border-radius: 25px;
color: white;
margin: 4%;
background: ${props =>(props.primary ? 'mediumseagreen':'dodgerblue')};

`


export default function NasaContent(){
    const [date, setDate] = useState(dateFormat())
    const [nasaObject, setNasaObject] = useState({})
    const url = 'https://api.nasa.gov/planetary/apod?api_key=tRWYPgRzOvaw9eQCaToqj4hjDnidZ1x16pZtxTr3&date='
    
    function dateFormat(today=(new Date())){
        //Sets the todays date to url friendly date
        if(typeof today=='object'){
        let month = (today.getUTCMonth() + 1);
        let day = today.getUTCDate();
        let year = today.getUTCFullYear();
        let newDate = `${year}-${month}-${day}`
        return newDate}
        else{
            return today
        }
    }
    function previousDay(aDate){
        //for use in button, goes back a day
        let date = aDate.split('-')
        if (date[2]>1){
        date[2] = date[2] - 1 
        console.log(date.join('-'))
        return(date.join('-'))
    }
    else{
        date[1] = date[1] - 1 
        date[2] = 31
        console.log(date.join('-'))
        return(date.join('-'))
    }
    }

    function nextDay(aDate){
        //for use in button, goes forward a day
        let date = aDate.split('-')
        date[2] = Number(date[2]) + 1 
        console.log(date.join('-'))
        return(date.join('-'))
    }

    function isToday(){
        //returns true if day is today
        // console.log(dateFormat(), dateFormat(date))
        return (dateFormat()===dateFormat(date))
    }

    
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
        // <div className='article'>
        <Container>
            <Row>
            <NasaLayout id={1}
            hdurl={nasaObject.hdurl}
            copyright = {nasaObject.copyright}
            title = {nasaObject.title}
            explanation = {nasaObject.explanation}
            date = {nasaObject.date}
            />
            <GoodButton onClick={() =>{ setDate(previousDay(date))} }>Yesterday</GoodButton>
            <GoodButton primary onClick={() =>{ setDate(nextDay(date))} }>Tomorrow</GoodButton>
            {/* {tomorrowButton()} */}
            </Row>  
        </Container>  
        // </div>
    )
    
}