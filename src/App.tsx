import React from "react";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import SearchComponent from "./Components/SearchComponent/SearchComponent";
import GetListMovies from "./Content/GetListContent/GetListMovies";
import GetMovieDetails from "./Content/GetMovieDetailContent/GetMovieDetails";

const App = () => {
  
    return(
      <>
      <HeaderComponent />
      <SearchComponent />
      {/* <GetListMovies/> */}
      <GetMovieDetails />
      </>
      )
  
}

export default App;
