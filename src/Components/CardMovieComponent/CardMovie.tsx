import React from "react";
import {  StatusMovie } from "../../Constants/movie";
import { StatusInformation, Title } from "./styles";

export const CardMovie = (props:{
  title:string,
  release_date:string,
  overview:string,
  information?:string,
  situation?:string,
  original_language?:string,
  duration?:string,
  price?:string,
  receit?:string,
  lucro?:string
}) => {
  return(
    <div className="card-movie">
      <div className="content-card-movie">
        <Title>
          {props.title} 
          <div className="released">
            {props.release_date}
          </div>
        </Title>
          <h2>{StatusMovie.overview}</h2>
          <hr />
          {props.overview}
          <hr />
          <h2>{StatusMovie.information}</h2>
          <hr />
          <div className="status-information-movie">
            <StatusInformation>
              <li>{props.situation}</li>
              <li>{props.original_language}</li>
              <li>{props.duration}</li>
              <li>{props.price}</li>
              <li>{props.receit}</li>
              <li>{props.lucro}</li>
            </StatusInformation>
          </div>
      
      </div>
    </div>
  ) 
}

export default CardMovie;