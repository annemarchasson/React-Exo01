import PropTypes from 'prop-types';

// function creation card pokemon prend props enfant pokemon
function PokemonCard (pokemon) {

    //console.log(pokemon.pokemon.imgSrc);
    //console.log(pokemon.pokemon.name);
    // on voit que si un seul pokemon, il ne descend pas jusqu'à imgSrc qui n'existe pas dans pokemon.  
    //mais seulement dans pokemon.pokemo.

//return condition
return pokemon.pokemon.imgSrc !== undefined ?

// si oui alors
<figure>
    <img src={pokemon.pokemon.imgSrc} alt={pokemon.pokemon.name} />
    <figcaption>{pokemon.pokemon.name}</figcaption>
</figure>
//si non alors
:
<figure>
    <p>???</p>
    <figcaption>{pokemon.pokemon.name}</figcaption>
</figure>
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape ({
        name:PropTypes.string.isRequired,
        imgSrc: PropTypes.object,
    }).isRequired,
}
/* // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired
  }),*/

// export function PokemondCard pour app.jsx
export default PokemonCard;
