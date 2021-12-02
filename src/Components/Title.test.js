import { render, screen } from '@testing-library/react';
import Title from './Title'

describe("Title of the Film", () => {
    test('renders title of the first film', () => {
        const propTitle = {
            title: "Castle in the Sky"
        };
        render(<Title {...propTitle} />);
        expect(screen.getByText(/Castle in the Sky/i)).toBeInTheDocument();
    });
});
