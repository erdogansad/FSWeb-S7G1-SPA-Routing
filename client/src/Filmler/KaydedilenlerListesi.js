import React from 'react';
import { NavLink } from 'react-router-dom';

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie, idx) => (
        <NavLink key={idx} className={isActive => "nav-link " + (isActive ? "saved-active" : "")} to={"/filmler/"+movie.id}><span className="saved-movie">{movie.title}</span></NavLink>
      ))}
      <NavLink className={isActive => "nav-link " + (isActive ? "saved-active" : "")} to="/" exact><div className="home-button">Anasayfa</div></NavLink>
    </div>
  );
}
