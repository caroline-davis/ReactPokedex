import { render, screen } from '@testing-library/react';
import Detail from './Detail';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

describe('Pokemon detail page', () => {

    test('full app rendering of detail page', () => {

        // jest.mock("react-router-dom", () => ({
        //     ...jest.requireActual("react-router-dom"),
        //     useParams: () => ({
        //         pokemon: 'weedle'
        //     })
        // }));

        // render(<Detail />)
        // const linkElement = screen.getByText(/weedle/i)
        // expect(linkElement).toBeInTheDocument()


    })
})