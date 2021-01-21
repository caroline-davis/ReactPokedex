import React, { useState, useEffect } from 'react';
import { getPokemonApi } from '../Api/index'
import { useParams } from "react-router-dom";


function Detail() {

    const [pokemonDetails, setPokemonDetails] = useState("")
    const [loading, setLoading] = useState(false)
    const [loadingError, setLoadingError] = useState(false)

    let { pokemon } = useParams()

    // useEffect here to fetch
    const pokemonInfo = (getPokemonApi(pokemon))


    return (
        <div></div>
    )


}

export default Detail;