import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import GetListMovies from "../Content/GetListContent/GetListMovies";
import GetMovieDetails from "../Content/GetMovieDetailContent/GetMovieDetails";


const RoutesComponent = () => {
    return(
      <HashRouter>
        <Routes>
            <Route element = { <GetListMovies/> }  path="/" />
            <Route element = { <GetMovieDetails /> }  path="/movie/:id" />
            <Route element = { <GetListMovies/> }  path="*" />
        </Routes>
       </HashRouter>
      )
  
}

export default RoutesComponent;