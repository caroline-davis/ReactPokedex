import React from 'react'
import { useHistory } from "react-router-dom";
import { noItems, headings, headingKeys } from '../Utils/Constants'
import './pokemonprofile.css'

export default ({ data }) => {

    let history = useHistory()

    function handleClick() {
        history.push('/')
    }

    const pokemonInfo = headingKeys.map(headingKey => {
        return <div key={headingKey}>
            <b>{headings[headingKey]}</b> {data[headingKey] ? data[headingKey] : noItems}
        </div>
    })

    return (
        <div className="profile-container">
            <img src={data.image} alt={`${data.name}-image`} />
            <div className="pokemon-name">{data.name.toUpperCase()}</div>
            <div className="pokemon-attributes">
                {pokemonInfo}
            </div>
            <button className="back-button"
                onClick={handleClick}>back
            </button>
        </div>
    )
}