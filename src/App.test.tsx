import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('Home Page', () => {
  it('Home Page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const HEADER = screen.getByTestId('header');
    expect(HEADER).toBeInTheDocument();
  });
});
