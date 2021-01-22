import React from 'react';
import './searchpokemon.css'
import { getPokemonApi } from '../Api/index'
import { searchPlaceholder, BASIC_URL } from '../Utils/Constants'

export default ({ searchValue, onChange, onResult, onLoading, onError }) => {

    async function callSearchPokemon() {
        if (searchValue) {
            onLoading(true)
            onError(false)
            try {
                const result = await getPokemonApi(searchValue.toLowerCase(), BASIC_URL)
                onResult(result)
                onLoading(false)
                onError(false)
            } catch {
                onLoading(false)
                onResult(null)
                onError(true)
            }
        }
    }

    const handleKeypress = e => {
        if (e.key === "Enter") {
            callSearchPokemon();
        }
    };

    return (
        <div className="search-container">
            <input type="text"
                id="search-pokemon"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={handleKeypress}>
            </input>
            <button onClick={() => callSearchPokemon()}>Search</button>
        </div>
    )
}
