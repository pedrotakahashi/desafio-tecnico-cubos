import React, { useEffect, useState } from "react";
import responseApi from "../../Services/Api/api";
import { IMovie } from "../../Services/Interfaces/IMovie";
import CardMovie from "../CardMovieComponent/CardMovie";

const GetMovies = () => {
  const[movies, setMovies] = useState<IMovie[]>([]);
  const receiveMoviesFromApi = async() => {
    try {
      const getResponseMovie = await responseApi;
      setMovies(getResponseMovie.data.results);
    } catch(error) {
      console.log("Error: ", error)
    }
  }

  useEffect(() => {
    receiveMoviesFromApi();
  }, [])

  return(
    <>
      <div className="content" >
        {movies.map((movie) =>{
          console.log('retorno do map->',movie);
          return(
            <CardMovie
            title={movie.title}
            overview={movie.overview}
            release_date={movie.release_date} />
         )
        })}
      </div>
    </>
 )
}


export default GetMovies;
