import axios from 'axios';

export const listOfMovies = axios.get(
"https://api.themoviedb.org/3/movie/popular?api_key=2fab12914dc9f1245db2f654c6f8b321&language=en-US&page=1&page_size=5&language=pt-BR",
);

export const detailsOfMovie = async(id:String) => {
  try{
    if(!id) return;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=2fab12914dc9f1245db2f654c6f8b321&language=pt-BR`
    );
    return response.data
  }catch(error) {
    console.log(error);
  }
}

export const searchMovieByGenre =(genre:String) => {
  axios.get(
  `https://api.themoviedb.org/3/search/movie?query=${genre}&api_key=2fab12914dc9f1245db2f654c6f8b321&language=pt-BR&page=1&include_adult=false`,
  );
}
