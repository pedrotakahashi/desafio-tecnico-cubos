import React, { useEffect, useState } from "react";
import {listOfMovies, detailsOfMovie} from "../../Services/Api/api";
import CardDetail from "../../Components/CardDetailComponent/CardDetail";
import { initialData } from "../../Constants/initialData";

const GetMovieDetails = () => {
  
  const[movie, setMovie] = useState({...initialData});
  const imageUrl = 'https://image.tmdb.org/t/p/w400/';

  const receiveListOfMovies = async() => {
    try {
      const getMoviesList = await detailsOfMovie('634649');
      setMovie(getMoviesList);
    } catch(error) {
      console.log("Error: ", error)
    }

  }

  const convertStatus = () =>{
    switch(movie.status){
      case 'Released':
        movie.status = 'Lançado';
        break;
    }
    return(movie);
  }

  const convertRuntime = () =>{
    if(!movie.runtime){
      return null;
    } 
    let newValue = movie.runtime;
    newValue = movie.runtime/60;
    movie.runtime = newValue;
    console.log(movie.runtime);
    return (movie.runtime);
  }
  
  const changeLanguage = () => {
    switch(movie.original_language){
      case 'en':
        movie.original_language = 'Inglês';
        break;
      case 'fr':
        movie.original_language = 'Francês';
        break;
      case 'ja':
        movie.original_language = 'Japonês';
        break;
      case 'es':
        movie.original_language = 'Espanhol';
        break;
      case 'pt':
        movie.original_language = 'Português';
        break;
    }
    return(movie);
  }

  const valueAverage = () => {
    if(movie.vote_average <= 10){
      let convertedValue = movie.vote_average*10;  
      movie.vote_average = convertedValue;
    }
    return (movie.vote_average)
  }

  useEffect(() => {
    receiveListOfMovies();
    convertRuntime();
    convertStatus();
    changeLanguage();
    valueAverage();
  }, [])
  


  

  return(
    <>
      <CardDetail
      key={movie?.id}
      title={movie?.title}
      overview={movie?.overview}
      release_date={movie?.release_date}
      poster_path={imageUrl+movie?.poster_path}
      original_language={movie?.original_language}
      status={movie?.status}
      budget={movie?.budget}
      vote_average={movie?.vote_average}
      genres={movie?.genres}
      runtime={movie.runtime}
      revenue={movie?.revenue}
      />
    </>
 )
}


export default GetMovieDetails;
