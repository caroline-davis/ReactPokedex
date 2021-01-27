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
            <img src={data.image} alt={`${data.name}-image`} data-testid="image-test-id" />
            <div className="pokemon-name" data-testid="name-test-id">{data.name.toUpperCase()}</div>
            <div className="pokemon-attributes" data-testid="attribute-test-id">
                {pokemonInfo}
            </div>
            <button className="back-button"
                data-testid="button-test-id"
                onClick={handleClick}>back
            </button>
        </div>
    )
}