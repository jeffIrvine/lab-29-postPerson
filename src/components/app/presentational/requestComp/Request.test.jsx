import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Request from './Request';

describe('Request component', () => {
  afterEach(() => cleanup());
  it('renders Request', () => {
    const { asFragment } = render(<Request
      url=""
      method=""
      json="{}"
      onSubmit={ () => {} } 
      onChange={ () => {} } 
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
