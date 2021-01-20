import React, { useState } from 'react';
import './App.css';
import SearchPokemon from './Components/SearchPokemon'
import PokemonCard from './Components/PokemonCard'
import { title } from './Utils/Constants'

function App() {

  const [searchPokemon, setSearchPokemon] = useState("")
  const [currentPokemon, setCurrentPokemon] = useState(null)
  const [pokemonLoading, setPokemonLoading] = useState(false)
  
  return (
    <div className="OuterContainer">
      <div className="Banner">{title}</div>
      <SearchPokemon searchValue={searchPokemon} onChange={setSearchPokemon} onResult={setCurrentPokemon} />
      {currentPokemon &&
        <PokemonCard currentValue={currentPokemon}></PokemonCard>
      }
    </div >
  );
}

export default App;
