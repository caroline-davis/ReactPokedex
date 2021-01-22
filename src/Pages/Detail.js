import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import pokeball from '../Assets/pokeball.png'
import PokemonProfile from '../Components/PokemonProfile'
import { getPokemonApi } from '../Api/index'
import { errorMsg, BASIC_URL } from '../Utils/Constants'
import './detail.css'


function Detail() {

    let { pokemon } = useParams()

    const [pokemonDetails, setPokemonDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingError, setLoadingError] = useState(false)

    function wrangleData(data) {
        return {
            "name": data.name,
            "type": data.types.map(type => type.type.name).join(', '),
            "image": data.sprites.front_default,
            "height": data.height,
            "weight": data.weight,
            "abilities": data.abilities.map(ability => ability.ability.name).join(', '),
            "items": data.held_items.map(heldItem => heldItem.item.name).join(', ')
        }
    }

    useEffect(() => {
        async function pokemonInfo() {
            setLoading(true)
            try {
                const result = await getPokemonApi(pokemon.toLowerCase(), BASIC_URL)
                const data = wrangleData(result)
                setPokemonDetails(data)
                setLoading(false)
                setLoadingError(false)
            } catch {
                setLoading(false)
                setLoadingError(true)
            }
        }
        pokemonInfo();
    }, [])


    return (
        <div className="detail-container">
            {loading && <img className="spinner" src={pokeball} alt="loading"></img>}
            {loadingError && <div className="error-msg">{errorMsg}</div>}
            {!loading && pokemonDetails &&
                <div><PokemonProfile data={pokemonDetails} /></div>}
        </div>
    )
}

export default Detail;