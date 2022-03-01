import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText("OI, VEM SEMPRE AQUI?");
    expect(linkElement).toBeInTheDocument();
  });
});