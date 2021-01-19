import React from 'react';
import './searchpokemon.css'
import { getPokemonApi } from '../Api/index'

export default ({ searchValue, onChange, onResult }) => {

    async function callSearchPokemon() {
        const result = await getPokemonApi(searchValue)
        onResult(result)
    }

    return (
        <>
            <input type="text"
                placeholder="Type in a pokemon"
                className="search-for-pokemon"
                value={searchValue}
                onChange={(e) => onChange(e.target.value)}>
            </input>
            <button onClick={() => callSearchPokemon()}>Search</button>
        </>
    )
}
