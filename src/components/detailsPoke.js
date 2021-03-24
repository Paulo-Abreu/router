import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from './Table'

const DetailsPokes = () => {
  const [characters, getCharacter] = useState({});
  

  //ao invés de ser por props eu vou colocar como useParams
  const { name } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      getCharacter(res.data);
    });
  }, []);

  //agora meu axios vai fazer a requisição conforme o parametro da url!

  console.log(characters);
  const img = characters && characters.moves && characters.sprites.front_default;
  return (

    <div className="card">
      <div className="card-text">
        <p>{name}</p>
        <p><h5>Habilidade : </h5 >{characters && characters.abilities && characters.abilities[0].ability.name} </p>
        <p><h5>Ataque : </h5 >{characters && characters.moves && characters.moves[0].move.name} </p>
        <img src={img}></img>
        
      </div>
    </div>
  );
  
};

export default DetailsPokes;
