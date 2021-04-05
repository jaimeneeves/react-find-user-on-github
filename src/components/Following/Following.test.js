import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Following from './Following';

describe('<Following />', () => {
  test('it should mount', () => {
    render(<Following />);
    
    const following = screen.getByTestId('Following');

    expect(following).toBeInTheDocument();
  });
});