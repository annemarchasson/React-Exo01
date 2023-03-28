//variable array pokemon
const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

// function creation card pokemon
function PokemonCard (){
    
//variable pokemon with first pokemonList
const pokemon = pokemonList[1];

console.log(pokemonList);
return pokemon.imgSrc !== undefined ?
<figure>
    <img src={pokemon.imgSrc} alt={pokemon.name} />
    <figcaption>{pokemon.name}</figcaption>
</figure>
:
<figure>
    <p>???</p>
    <figcaption>{pokemon.name}</figcaption>
</figure>
}


// export function PokemondCard pour app.jsx
export default PokemonCard;
