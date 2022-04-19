import React, { Fragment, useEffect, useState } from "react";
import { listOfMovies } from "../../Services/Api/api";
import MovieInterface from "../../Services/Interfaces/MovieInterface";
import CardListComponent from "../../Components/CardListComponent/CardListComponent";
import PaginationComponent from "../../Components/PaginationComponent/PaginationComponent";
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";

const GetListMovies = () => {
  const [originalMovies, setOriginalMovies] = useState<MovieInterface[]>([]);
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);
  const [search, setSearch] = useState('');

  const imageUrl = 'https://image.tmdb.org/t/p/w200/';

  const receiveListOfMovies = async () => {
    setLoading(true);
    try {
      const response = await listOfMovies;
      const moviesList = valueAverage(response.data.results);
      setOriginalMovies(moviesList);
      setMovies(moviesList);
    } catch (error) {
      console.log("Error: ", error)
    }
    setLoading(false);
  }

  const valueAverage = (movieList: MovieInterface[]) => {
    movieList.map((value) => {
      if (value.vote_average <= 10) {
        let convertedValue = value.vote_average * 10;
        value.vote_average = convertedValue;
      }
      return (value.vote_average)
    })
    return movieList;
  }

  useEffect(() => {
    receiveListOfMovies();
  }, [])

  useEffect(() => {
    if (search === '') {
      setCurrentPage(1);
      setMovies(originalMovies);
      return;
    }
    let tempMovies = [...originalMovies];
    tempMovies = tempMovies.filter(movie => movie.title.toLowerCase().indexOf(search.toLowerCase()) > -1);
    setCurrentPage(1);
    setMovies(tempMovies);
  }, [search, originalMovies]);

  const indexLastMovie = currentPage * moviesPerPage;
  const indexFirstMovie = indexLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexFirstMovie, indexLastMovie);

  return (
    <Fragment>
      <HeaderComponent/>
      <SearchComponent
        search={search}
        setSearch={setSearch}
      />
      <div className="content" >
        {loading ? 'Carregando...' : (
          currentMovies.map((movie) => {
            if (movie.overview === '') {
              return null;
            }
            return (
              <>
                <CardListComponent
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  release_date={movie.release_date}
                  overview={movie.overview}
                  poster_path={imageUrl + movie.poster_path}
                  vote_average={movie.vote_average}
                  genres={movie.genres}
                />
              </>
            )
          })
        )}
      </div>
      <PaginationComponent
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        changePage={setCurrentPage}
        currentPage={currentPage}
      />
    </Fragment>
  )
}


export default GetListMovies;
