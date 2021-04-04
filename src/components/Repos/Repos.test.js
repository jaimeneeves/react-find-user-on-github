import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Repos from './Repos';

describe('<Repos />', () => {
  test('it should mount', () => {
    render(<Repos />);
    
    const repos = screen.getByTestId('Repos');

    expect(repos).toBeInTheDocument();
  });
});