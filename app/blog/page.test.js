import '@testing-library/jest-dom'
import { render, act } from '@testing-library/react'
import Blog from '../blog/page'
import React from 'react'

// Mock the fetch function used in fetchAPI
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    json: () => Promise.resolve({ data: [] }), // or your mock data
    text: () => Promise.resolve(''), // needed for error handling
  })
);
describe('Blog', () => {
  it('renders a PAGE', async () => {
    await act(async () => {
      render(<Blog />);
    });
  });
});