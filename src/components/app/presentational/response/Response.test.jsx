import React from 'react';
import Response from './Response';
import { render, cleanup } from '@testing-library/react';

describe('Response component', () => {
  afterEach(() => cleanup());
  it('renders Response', () => {
    const { asFragment } = render(<Response
      response="" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
