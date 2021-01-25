import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonCard from './PokemonCard';

const testData = {
    "name": "weedle",
    "sprites": {
        "front_default": "weedle-front-pokemon-default"
    },
    "types": [
        {
            "type": {
                "name": "bug"
            }
        },
        {
            "type": {
                "name": "poison"
            }
        }
    ]
}

describe('Pokemon card', () => {

    test('We expect the pokemon card to return the correct name', () => {
        const { getByTestId } = render(<PokemonCard currentValue={testData} />);
        expect(getByTestId('name-test-id')).toHaveTextContent('weedle')
    })
    test('We expect the pokemon card to return the correct pokemon type', () => {
        const { getByTestId } = render(<PokemonCard currentValue={testData} />);
        expect(getByTestId('type-test-id')).toHaveTextContent('Type: bug, poison')
    })

});
