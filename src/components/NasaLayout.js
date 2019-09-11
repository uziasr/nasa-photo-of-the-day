import React from 'react';

export const NasaLayout = (props) =>{
    return(
        <div classNAme='article-list'>
            <img src={props.hdurl} alt='Space'/>
            <p>Photo credits: {props.copyright}</p>
            <h1>{props.title}</h1>
            <p>{props.explanation}</p> 
            <p>Date: {props.date}</p>

        </div>
    )
}

//export default NasaLayout; 