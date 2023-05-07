import React, { useState, useEffect } from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';

import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi';
import FilmListesi from "./Filmler/FilmListesi";
import Film from './Filmler/Film';

export default function App () {
  const [saved, setSaved] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    }
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = id => {
    let filter = saved.filter(film => film.id === parseInt(id));
    filter[0] === undefined && setSaved([...saved, movieList[id]]);
  };

  return (
    <Router>
      <div>
        <KaydedilenlerListesi list={saved} />
        <Switch>
          <Route exact path="/"><FilmListesi movies={movieList}/></Route>
          <Route path="/filmler/:id"><Film KaydedilenlerListesineEkle={KaydedilenlerListesineEkle}/></Route>
        </Switch>
      </div>
    </Router>
  );
}
