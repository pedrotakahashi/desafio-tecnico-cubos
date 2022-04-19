import React, { useEffect, useState } from "react";
import {listOfMovies} from "../../Services/Api/api";
import  MovieInterface from "../../Services/Interfaces/MovieInterface";
import CardListComponent from "../../Components/CardListComponent/CardListComponent";


const GetListMovies = () => {
  const[movies, setMovies] = useState<MovieInterface[]>([]);
  const imageUrl = 'https://image.tmdb.org/t/p/w200/';

  const receiveListOfMovies = async() => {
    const getMoviesList = await listOfMovies;
    try {
      setMovies(getMoviesList.data.results);
    } catch(error) {
      console.log("Error: ", error)
    }
  }

  const valueAverage = () => {
    movies.map((value) =>{
      if(value.vote_average <= 10){
        let convertedValue = value.vote_average*10;  
        value.vote_average = convertedValue;
      }
      return (value.vote_average)
    })
  }

  useEffect(() => {
    receiveListOfMovies();
  }, [])

  valueAverage();
  return(
    <>
      <div className="content" >
        {movies.map((movie) =>{
          if(movie.overview === ''){
            return null;
          }
          return(
            <>
              <CardListComponent
              key={movie.id}
              id={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              overview={movie.overview}
              poster_path={imageUrl+movie.poster_path}
              vote_average={movie.vote_average}
              genres={movie.genres}
              />
            </>
         ) 
        })}
        
      </div>
    </>
 )
}


export default GetListMovies;
