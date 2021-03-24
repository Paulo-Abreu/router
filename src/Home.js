import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pokes from './components/Pokes';

const Home = () => {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20").then((res) => {
      setCharacter(res.data.results);
    });
  }, []);

  console.log(characters);
  const img = characters && characters.moves && characters.sprites.front_default;
  return (
    <div className="HomeCards">
      {characters.length > 0 &&
        characters.map(({ name }) => (
          <div>
            <Link id="link" to={`/pokes-details/${name}`}><Pokes name={name} /></Link>
              <img src={img}></img>
          </div>
        ))}
    </div>
  );
};
export default Home;
