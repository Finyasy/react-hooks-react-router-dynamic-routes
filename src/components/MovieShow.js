// ./src/components/MovieShow.js
import React from "react";
import {useParams} from "react-router-dom";

function MovieShow(movies) {
    // call useParams to access the `params` from the url
    const params = useParams();
    console.log(params);
  return (
    <div>
      <h3>{movies[params.movieID].title}</h3>
    </div>
  );
}

export default MovieShow;