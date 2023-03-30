import PropTypes from 'prop-types';

function PokemonCard (pokemon) {
return (
        <figure>
        {pokemon.pokemon.imgSrc !== undefined 
        ? (<img src={pokemon.pokemon.imgSrc} alt={pokemon.pokemon.name} />) 
        : (<p>???</p>)}
        
        <figcaption>{pokemon.pokemon.name}</figcaption>
        </figure>
        );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape ({
        name:PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

export default PokemonCard;
