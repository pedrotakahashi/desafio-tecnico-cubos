import React, { useEffect, useState } from "react";
import { detailsOfMovie } from "../../Services/Api/api";
import CardDetail from "../../Components/CardDetailComponent/CardDetail";
import { initialData } from "../../Constants/initialData";
import MovieInterface from "../../Services/Interfaces/MovieInterface";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";

const GetMovieDetails = () => {
  const [movie, setMovie] = useState({ ...initialData });
  const imageUrl = 'https://image.tmdb.org/t/p/w300/';
  const loadMovie = async () => {
    try {
      let movieContent = await detailsOfMovie('414906');
      movieContent = convertRuntime(movieContent);
      movieContent = convertStatus(movieContent);
      movieContent = changeLanguage(movieContent);
      movieContent = valueAverage(movieContent);
      setMovie(movieContent);
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  const convertStatus = (loadedMovie: MovieInterface) => {
    switch (loadedMovie.status) {
      case 'Released':
        loadedMovie.status = 'Lançado';
        break;
    }
    return (loadedMovie);
  }

  const convertRuntime = (loadedMovie: MovieInterface) => {
    if (!loadedMovie.runtime) {
      return null;
    }
    let newValue = loadedMovie.runtime;
    newValue = loadedMovie.runtime / 60;
    loadedMovie.runtime = newValue;
    return (loadedMovie);
  }

  const changeLanguage = (loadedMovie: MovieInterface) => {
    switch (loadedMovie.original_language) {
      case 'en':
        loadedMovie.original_language = 'Inglês';
        break;
      case 'fr':
        loadedMovie.original_language = 'Francês';
        break;
      case 'ja':
        loadedMovie.original_language = 'Japonês';
        break;
      case 'es':
        loadedMovie.original_language = 'Espanhol';
        break;
      case 'pt':
        loadedMovie.original_language = 'Português';
        break;
    }
    return (loadedMovie);
  }

  const valueAverage = (loadedMovie: MovieInterface) => {
    if (loadedMovie.vote_average <= 10) {
      let convertedValue = loadedMovie.vote_average * 10;
      loadedMovie.vote_average = convertedValue;
    }
    return (loadedMovie)
  }

  useEffect(() => {
    loadMovie();
  }, [])

  return (
    <>
      <HeaderComponent/>
      <CardDetail
        key={movie.id}
        title={movie?.title}
        overview={movie?.overview}
        release_date={movie?.release_date}
        poster_path={imageUrl + movie?.poster_path}
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
