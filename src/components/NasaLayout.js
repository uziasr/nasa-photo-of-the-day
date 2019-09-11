import React from 'react';

export const NasaLayout = (props) =>{
    return(
        <div className='article-list'>
            <div className='leftContent'>
                <img className='mainImage' src={props.hdurl} alt='Space'/>
                <p>Photo credits: {props.copyright}</p>
            </div>
            <div className='rightContent'>
                <h1>{props.title}</h1>
                <p>{props.explanation}</p> 
                <p>Date: {props.date}</p>
                <button>Yesterday</button>
            </div>

        </div>
    )
}

//export default NasaLayout; 