import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonProfile from './PokemonProfile';

const data = {
    "name": "weedle",
    "sprites": {
        "front_default": "weedle-front-pokemon-default"
    },
    "type": ["bug, poison"],
    "abilities": '',
    "items": [],
    "height": 17,
    "weight": 905,
    "evolution": "beedrill",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
}

describe('Pokemon profile', () => {

    test('We expect the profile to return the correct attributes', () => {
        const { getByTestId } = render(<PokemonProfile data={data} />);
        expect(getByTestId('attribute-test-id')).toHaveTextContent('Type: bug, poisonHeight: 17Weight: 905Abilities: N/AItems: Evolution: beedrill')
    })

    test('We expect the profile to show the correct name', () => {
        const { getByTestId } = render(<PokemonProfile data={data} />);
        expect(getByTestId('name-test-id')).toHaveTextContent('WEEDLE')
    })

    test('We expect the profile to show the correct image', () => {
        render(<PokemonProfile data={data} />);
        const displayedImage = document.querySelector("img")
        expect(displayedImage.src).toContain("sprites/pokemon/13")
    })

    test('We expect the button to link back to home page', () => {
        const { getByTestId } = render(<PokemonProfile data={data} />);
        expect(getByTestId('button-test-id')).toHaveTextContent('back')
        const linkElement = screen.getByText(/back/i);
        expect(linkElement).toBeInTheDocument();
    })

});
