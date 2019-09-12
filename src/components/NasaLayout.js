import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import styled from "styled-components";
  
const NewCardText =styled.div`
  width:50%;
  margin: 2% auto;
`
const TextContent = styled.div`
width: 45%;
margin: 3% auto;
align-self: center;
`
const Image = styled.img`
width:80%;
`
const Wrapper = styled.div`
  display:flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top:5%;
  margin: 3% auto;
  
`
const RightSide = styled.div`
width:45%;
`

export const NasaLayout = (props) =>{
        return(
        <Wrapper>
            <div>
                <Image className='mainImage' src={props.hdurl} alt='Space'/>
                <p>Photo credits: {props.copyright}</p>
            </div>
            <div>
                <TextContent>
                    <h1>{props.title}</h1>
                    <p>{props.explanation}</p> 
                    <p>Date: {props.date}</p>
                    {/* <button>Yesterday</button> */}
                </TextContent>
            </div>
        </Wrapper>
    )
    // return (
    //     <div>
    //       <Card>
    //         <CardImg top width="30%" src={props.hdurl} alt="Card image cap" />
    //         <CardBody>
    //           <CardTitle>{props.title}</CardTitle>
    //           <CardSubtitle>Date: {props.date}, Copyright: {props.copyright}</CardSubtitle>
    //           <NewCardText>{props.explanation}</NewCardText>
    //           {/* <Button >Button</Button> */}
    //         </CardBody>
    //       </Card>   
    //     </div>
    //   );
}
