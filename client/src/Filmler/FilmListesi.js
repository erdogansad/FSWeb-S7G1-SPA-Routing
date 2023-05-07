import React from 'react';
import { Link } from 'react-router-dom';

export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <FilmDetaylari key={movie.id} movie={movie} />
      ))}
    </div>
  );
  }

function FilmDetaylari(props) {
  const { id, title, director, metascore } = props.movie;

  return (
    
      <div className="movie-card">
      <Link to={"/filmler/"+id}><h2>{title}</h2></Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
    
  );
}
