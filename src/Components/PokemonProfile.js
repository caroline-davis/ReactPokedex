import React from 'react'
import { useHistory } from "react-router-dom";
import './pokemonprofile.css'

export default ({ data }) => {

    let history = useHistory()

    function handleClick() {
        history.push('/')
    }

    return (
        <div class="profile-container">
            <img src={data.image} alt={`${data.name}-image`} />
            <div class="pokemon-name">{data.name.toUpperCase()}</div>
            <div class="pokemon-attributes">
                <div><b>Type:</b> {data.type} </div>
                <div><b>Height:</b> {data.height}</div>
                <div><b>Weight:</b> {data.weight}</div>
                <div><b>Abilities:</b> {data.abilities}</div>
                <div><b>Items:</b> {data.items}</div>
            </div>
            <button class="back-button"
                onClick={handleClick}>back
            </button>
        </div>
    )
}