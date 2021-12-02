import { render, waitFor, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
    return res(ctx.json({
      data: [{
        id: 1,
        title: "Castle in the Sky"
      },
      {
        id: 2,
        title: "Frozen"
      }]
    }))
  }),
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test("renders 'Title of the movie is' text", () => {
  render(<App />);
  expect(screen.getByText(/Title of the movies is/i)).toBeInTheDocument();
});

// Why this test case is failing????? *******************
 test('Display the title of first movie', async () => {
  render(<App />);
    await waitFor(() => screen.getByText(/Castle in the Sky/i));
    expect(screen.getByText(/Castle in the Sky/i)).toBeInTheDocument();
  }); 