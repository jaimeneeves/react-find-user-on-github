import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Followers from './Followers';

describe('<Followers />', () => {
  test('it should mount', () => {
    render(<Followers />);
    
    const followers = screen.getByTestId('Followers');

    expect(followers).toBeInTheDocument();
  });
});