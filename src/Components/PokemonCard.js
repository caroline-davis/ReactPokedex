import './pokemoncard.css';


export default ({ currentValue }) => {

    console.log(currentValue)
    return (
        <div className="card-container">
            <img src={currentValue.sprites.front_default} alt={currentValue.species.name}></img>
            <div className="text-container">
                <h1>{currentValue.species.name}</h1>
                <div className="pokemon-details"> <b>Type:</b> {currentValue.types.map(type => type.type.name).join(', ')}</div>
            </div>
        </div>
    )
}