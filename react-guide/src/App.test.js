import { render, screen } from '@testing-library/react';
import App from './App';
import Store from './Store/Store';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  render(<Provider store={Store}><App /></Provider>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders save to reload text', () => {
  render(<Provider store={Store}><App /></Provider>);
  const textElement = screen.getByText(/save to reload/i);
  expect(textElement).toBeInTheDocument();
});