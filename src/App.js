import Pokes from './components/pokes';
import axios from "axios";
import './App.css';
import React, { useState, useEffect} from "react";

const App = () => {
    
    const [characters, getCharacter] = useState([]);
   
    
       /* const handleChoose = (props) => {
          axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`).then((res) => {
            getCharacter(res.data);
          });
        };*/


        axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
          getCharacter(res.data.results);
        });
      
    
      console.log(characters);
   return(
   <div className="HomeCards">

    {characters.length > 0 &&
      characters.map(({name}) => (
        <Pokes name={name} />
      ))
    } 
       
    </div>
   )
  
   };
export default App;