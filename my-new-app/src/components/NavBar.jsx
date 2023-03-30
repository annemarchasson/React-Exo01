
function NavBar ({index, setIndex, pokemonList}) {

function handleNextClick() {
  setIndex(index + 1);
} 

function handlePrevClick() {
  setIndex(index - 1);
}
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
    </div>
  );
}

export default NavBar;