import React from "react";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

// import the custom `useRouteMatch` hook from React Router
import { Route, useRouteMatch } from "react-router-dom";

function MoviesPage({ movies }) {
  // useRouteMatch is a custom hook that returns the current match object
  // from the router.
  const match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <MoviesList movies={movies} />
      {/* Adding code to show a message to the user to select a movie if they haven't yet */}
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>

      <Route path={`${match.path}/:movieID`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
