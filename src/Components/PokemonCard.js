import './pokemoncard.css';

export default ({ currentValue }) => {

    return (
        <div className="card-container">
            <img src={currentValue.sprites.front_default} alt={currentValue.name}></img>
            <div className="text-container">
                <h1 data-testid="name-test-id">{currentValue.name}</h1>
                <div data-testid="type-test-id"> <b>Type:</b> {currentValue.types.map(type => type.type.name).join(', ')}</div>
            </div>
        </div>
    )
}