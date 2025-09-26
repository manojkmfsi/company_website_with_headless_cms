import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Post from './post';
import React from 'react';

const post = {
  documentId: 1,
  title: 'Test Post 1',
  content: 'This is the content of Test Post 1',
  image: { formats: { small: { url: '' } }, url: '' },
  author: { name: 'Author 1' },
  publishedAt: '2023-10-01T00:00:00Z',
  slug: 'test-post-1',
};

describe('Post', () => {
  it('renders post', () => {
    render(<Post post={post} />);
  });

  it('renders post details', () => {
    render(<Post post={post} />);

    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.content)).toBeInTheDocument();
    expect(screen.getByText(post.author.name)).toBeInTheDocument();
    expect(
      screen.getByText(
        new RegExp(
          new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          'i'
        )
      )
    ).toBeInTheDocument();
  });
});
