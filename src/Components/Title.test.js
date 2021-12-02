import { render, screen } from "@testing-library/react"
import Title from "../Components/Title.js"

describe("Title of the Film", () => {
    test('renders title of the first film', () => {
        const propTitle = {
            title: "Castle in the Sky"
        };
        render(<Title {...propTitle} />);
        expect(screen.getByText(/Castle in the Sky/i)).toBeInTheDocument();
    });

    test('Returns the title of the first film', async () => {
        const getFilms = require('../App');
        const axios = require('axios');
        jest.mock('axios');
        axios.get.mockResolvedValue({
            data: [{
                id: 1,
                title: "Castle in the Sky"
            },
            {
                id: 2,
                title: "Frozen"
            }]
        });

        const title = await getFilms();
        expect(title).toEqual('Castle in the Sky');
        jest.resetAllMocks();
    });

});

