import React from 'react';
import Request from './Request';
import { render, cleanup } from '@testing-library/react';

describe('Request component', () => {
  afterEach(() => cleanup());
  it('renders Request', () => {
    const { asFragment } = render(<Request
      url=""
      method=""
      json=""
      onSubmit={ () => {} } 
      onChange={ () => {} } 
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
