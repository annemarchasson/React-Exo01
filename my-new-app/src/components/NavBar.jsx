
import { useState } from "react";
import  PokemonCard from "./PokemonCard";
function NavBar ({index, setIndex, pokemonList})  {
console.log(pokemonList[index])
const [pokemonToDisplay, setPokemonToDisplay] = useState();

/*function handleNextClick() {
  setIndex(index + 1);
} 

function handlePrevClick() {
  setIndex(index - 1);
} 
*/

const showPokemon = (pokemon) => {
  setPokemonToDisplay(pokemon)
}; 
  return (
    /*<div>
      {index <= 0 ? (
          <isplay:none></display:none>
        ) : (
          <button onClick={handlePrevClick}>Previous</button>
        )}

      {index < pokemonList.length - 1 ? (
          <button onClick={handleNextClick}>Next</button>
        ) : (
          <display:none></display:none>
        )}
    </div>*/
    <div>
    <ul>
      {pokemonList.map((pokemon) => (
        <li key={pokemon.name}>
          <button onClick={() => showPokemon(pokemon)}>{pokemon.name}</button>
        </li>
      ))}
    </ul>
    {pokemonToDisplay ? (<PokemonCard pokemon= {pokemonToDisplay}/>) : ' pick a pokemon'}
    </div>



  );
}

export default NavBar;