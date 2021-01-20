import React, { useState } from 'react';
import './App.css';
import SearchPokemon from './Components/SearchPokemon'
import PokemonCard from './Components/PokemonCard'
import { title, errorMsg } from './Utils/Constants'
import pokeball from './Assets/pokeball.png'

function App() {

  const [searchPokemon, setSearchPokemon] = useState("")
  const [currentPokemon, setCurrentPokemon] = useState(null)
  const [pokemonLoading, setPokemonLoading] = useState(false)
  const [loadingError, setLoadingError] = useState(false)

  return (
    <div className="outer-container">
      <div className="banner">{title}</div>
      <SearchPokemon searchValue={searchPokemon}
        onChange={setSearchPokemon}
        onResult={setCurrentPokemon}
        onLoading={setPokemonLoading}
        onError={setLoadingError} />
      {pokemonLoading && <img className="spinner" src={pokeball} alt="loading"></img>}
      {loadingError && <div className="error-msg">{errorMsg}</div>}
      {currentPokemon && !pokemonLoading && !loadingError &&
        <PokemonCard currentValue={currentPokemon}></PokemonCard>
      }
    </div >
  );
}

export default App;
