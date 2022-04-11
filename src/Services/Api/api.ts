import axios from 'axios';

const responseApi = axios.get(
"https://api.themoviedb.org/3/movie/popular?api_key=2fab12914dc9f1245db2f654c6f8b321&language=en-US&page=1&language=pt-BR",
);

export default responseApi;

