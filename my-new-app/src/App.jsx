import  PokemonCard from "./components/PokemonCard";
import { useState } from 'react';

function App() {

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

const [index, setIndex] = useState(0);

function handleNextClick() {
  setIndex(index + 1);
} 

function handlePrevClick() {
  setIndex(index - 1);
}

const pokemon = pokemonList[index];

  return (
    <div>
      
      {index <= 0 ? (
          <display:none></display:none>
        ) : (
          <button onClick={handlePrevClick}>Previous</button>
        )}


      {index < pokemonList.length - 1 ? (
          <button onClick={handleNextClick}>Next</button>
        ) : (
          <display:none></display:none>
        )}
      <PokemonCard pokemon= {pokemon}/>
    </div>
  );
}
export default App;


/* autre idée:

          <button disabled={
          pokemonList[index] < pokemonList.length -1 ||
          status === 'submitting'
          }>
          onClick={handlePrevClick}>Previous
          </button>
*/
