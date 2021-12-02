import { render,  screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

test('renders learn react link', () => {
  render(<App />);
  const titleText = screen.getByText(/Title of the movies is/i);
  expect(titleText).toBeInTheDocument();
});