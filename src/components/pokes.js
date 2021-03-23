import axios from "axios";
import { Link } from 'react-router-dom';
import React, { useState, useEffect} from "react";

const Pokes = (props) => {
  
  
  const [pokemonName, setPokemonName] = useState("");
  
  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      console.log(response);
    })
  }


  return(
   <div className="card">
       <div className="card-image" >

       </div>
       <div className="card-text"> 
            <h2>gi{props.name}</h2>
       </div>
       <div className="card-stats"> blablablbal</div>
   </div>
  );
  };


  
export default Pokes;