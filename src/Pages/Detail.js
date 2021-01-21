import React, { useState, useEffect } from 'react';
import { getPokemonApi } from '../Api/index'
import { useParams } from "react-router-dom";
import pokeball from '../Assets/pokeball.png'
import { errorMsg } from '../Utils/Constants'


function Detail() {

    let { pokemon } = useParams()

    const [pokemonDetails, setPokemonDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingError, setLoadingError] = useState(false)

    useEffect(() => {
        async function pokemonInfo() {
            setLoading(true)
            try {
                setPokemonDetails(await getPokemonApi(pokemon))
                setLoading(false)
                setLoadingError(false)
            } catch {
                setLoading(false)
                setLoadingError(true)
            }
        }
        pokemonInfo();
    }, [])


    if (!loading) {
        console.log(pokemonDetails.sprites.front_default)
        console.log(pokemonDetails.name)
        console.log(pokemonDetails.abilities.map(ability => ability.ability.name))
        console.log(pokemonDetails)
        console.log(pokemonDetails.held_items.map(heldItem => heldItem.item.name))
    }

    return (
        <>
            {loading && <img className="spinner" src={pokeball} alt="loading"></img>}
            {loadingError && <div className="error-msg">{errorMsg}</div>}
        </>
    )


}

export default Detail;