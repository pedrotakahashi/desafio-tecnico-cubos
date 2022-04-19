import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "../Components/HeaderComponent/HeaderComponent";
import SearchComponent from "../Components/SearchComponent/SearchComponent";
import GetListMovies from "../Content/GetListContent/GetListMovies";
import GetMovieDetails from "../Content/GetMovieDetailContent/GetMovieDetails";


const RoutesComponent = () => {
    return(
      <>
      <HeaderComponent />
      <SearchComponent />
        <HashRouter basename={process.env.PUBLIC_URL}>
           <Routes>
                <Route element = { <GetListMovies/> }  path="/" />
                <Route element = { <GetMovieDetails /> }  path="/movie/" />
            </Routes>
       </HashRouter>
      </>
      )
  
}

export default RoutesComponent;