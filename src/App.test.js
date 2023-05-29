import { render, screen } from '@testing-library/react';
import App from './App';

test('Render App Component', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement).toBeInTheDocument();
});

test('Url is correct', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement.href).toContain('youtube.com');
});
