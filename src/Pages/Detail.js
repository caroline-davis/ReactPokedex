import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import pokeball from '../Assets/pokeball.png'
import PokemonProfile from '../Components/PokemonProfile'
import { getPokemonApi } from '../Api/index'
import { errorMsg, BASIC_URL, EVOLUTION_URL, SPECIES_URL } from '../Utils/Constants'
import './detail.css'


function Detail() {

    let { pokemon } = useParams()

    const [pokemonDetails, setPokemonDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingError, setLoadingError] = useState(false)

    function wrangleData(basicData, evolutionData) {
        return {
            "name": basicData.name,
            "type": basicData.types.map(type => type.type.name).join(', '),
            "image": basicData.sprites.front_default,
            "height": basicData.height,
            "weight": basicData.weight,
            "abilities": basicData.abilities.map(ability => ability.ability.name).join(', '),
            "items": basicData.held_items.map(heldItem => heldItem.item.name).join(', '),
            "evolution": evolutionData.chain.evolves_to[0]?.evolves_to.map(evolve => evolve.species.name).join(', ')
        }
    }

    useEffect(() => {
        async function pokemonInfo() {
            setLoading(true)
            try {
                const basicInfo = await getPokemonApi(pokemon.toLowerCase(), BASIC_URL)
                const speciesInfo = await getPokemonApi(pokemon.toLowerCase(), SPECIES_URL)
                const evolutionId = speciesInfo.evolution_chain.url.split('/')
                const evolutionInfo = await getPokemonApi(evolutionId[evolutionId.length - 2], EVOLUTION_URL)
                const data = wrangleData(basicInfo, evolutionInfo)
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