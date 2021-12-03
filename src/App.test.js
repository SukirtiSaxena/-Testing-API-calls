import { render, waitFor, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://ghibliapi.herokuapp.com/films', (req, res, ctx) => {
    return res(ctx.json([
      {
        id: 1,
        title: "Castle in the Sky"
      },
      {
        id: 2,
        title: "Frozen"
      }])
    )
  }),
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Films', () => {

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

  test('If there is error response with status code 500, display error message', async () => {
    server.use(
      rest.get("https://ghibliapi.herokuapp.com/films", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<App />);
    await waitFor(() => screen.getByText(/Oops… something went wrong, try again/i));
    expect(screen.getByText(/Oops… something went wrong, try again/i)).toBeInTheDocument();
  });

  test('If there is error response with status code 418, display error message', async () => {
    server.use(
      rest.get("https://ghibliapi.herokuapp.com/films", (req, res, ctx) => {
        return res(ctx.status(418));
      })
    );
    render(<App />);
    await waitFor(() => screen.getByText(/418 I'm a tea pot/i));
    expect(screen.getByText(/418 I'm a tea pot/i)).toBeInTheDocument();
  });

});