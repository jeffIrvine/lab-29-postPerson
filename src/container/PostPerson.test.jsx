/* eslint-disable max-len */
// eslint-disable-next-line no-undef
global.fetch = require('node-fetch');

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostPerson from './PostPerson';

describe('PostPerson container', () => {
  it('tests PostPerson input', () => {
    render(<PostPerson />);

    const urlInput = screen.getByPlaceholderText('url');
    userEvent.type(urlInput, 'https://jsonplaceholder.typicode.com/todos/1');

    userEvent.click(screen.getByText('Submit'));

    return waitFor(() => {
      expect(screen.getByText('{"userId":1,"id":1,"title":"delectus aut autem","completed":false}')).toHaveTextContent('{"userId":1,"id":1,"title":"delectus aut autem","completed":false}');
    });
  });
});
