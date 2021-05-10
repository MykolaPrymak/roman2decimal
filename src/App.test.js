import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn more link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn more on Wikipedia \(English\)/i);
  expect(linkElement).toBeInTheDocument();
});
