import '@testing-library/jest-dom';
import { render, act, screen, fireEvent } from '@testing-library/react';
import PostList from './post-list';
import React from 'react';
import { fetchPosts } from '../../app/actions/fetchPosts';

const posts = [
  {
    documentId: 1,
    title: 'Test Post 1',
    content: 'This is the content of Test Post 1',
    image: { formats: { small: { url: '' } } },
    author: { name: 'Author 1' },
    publishedAt: '2023-10-01T00:00:00Z',
    slug: 'test-post-1',
  },
  {
    documentId: 2,
    title: 'Test Post 2',
    content: 'This is the content of Test Post 2',
    image: { formats: { small: { url: '' } } },
    author: { name: 'Author 2' },
    publishedAt: '2023-10-02T00:00:00Z',
    slug: 'test-post-2',
  },
  {
    documentId: 3,
    title: 'Test Post 3',
    content: 'This is the content of Test Post 3',
    image: { formats: { small: { url: '' } } },
    author: { name: 'Author 3' },
    publishedAt: '2023-10-03T00:00:00Z',
    slug: 'test-post-3',
  },
];

// Mock the server action
jest.mock('../../app/actions/fetchPosts', () => ({
  fetchPosts: jest.fn(),
}));

describe('Post list', () => {
  beforeEach(() => {
    fetchPosts.mockClear();
  });
  it('renders post list', async () => {
    await act(async () => {
      render(<PostList initialData={{ data: posts }} />);
    });
  });

  it('renders post details', async () => {
    await act(async () => {
      render(<PostList initialData={{ data: posts }} />);
    });
    // Check that each post details exists in the document
    posts.forEach((post) => {
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

  it('shows loader when loading and no posts', async () => {
    jest.useFakeTimers();

    await act(async () => {
      render(<PostList initialData={{ data: [] }} />);
    });

    // Delay the fetchPosts promise so loader stays visible
    let resolveFetch;
    fetchPosts.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveFetch = resolve;
        })
    );

    const input = screen.getByRole('textbox');

    // Trigger search, but don't advance timers yet
    await act(async () => {
      fireEvent.change(input, { target: { value: 'search' } });
    });

    // Loader should NOT be visible yet (debounce not fired)
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();

    // Now advance timers to fire debounce and trigger loading
    await act(async () => {
      jest.runAllTimers();
    });

    // Loader should be visible while fetchPosts is pending
    expect(screen.getByTestId('loader')).toBeInTheDocument();

    // Now resolve fetchPosts to finish loading
    await act(async () => {
      resolveFetch({ data: [] });
    });

    // Loader should disappear after loading
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  });

  it("loads more posts when 'Load More Posts' is clicked", async () => {
    await act(async () => {
      render(<PostList initialData={{ data: posts }} />);
    });
    const loadMoreBtn = screen.getByRole('button', {
      name: /Load More Posts/i,
    });
    expect(loadMoreBtn).toBeInTheDocument();
    // Mock fetchPosts for load more
    const morePosts = [
      {
        documentId: 5,
        title: 'Test Post 5',
        content: 'This is the content of Test Post 5',
        image: { formats: { small: { url: '' } } },
        author: { name: 'Author 5' },
        publishedAt: '2023-10-05T00:00:00Z',
        slug: 'test-post-5',
      },
      {
        documentId: 6,
        title: 'Search Result',
        content: 'Search content',
        image: { formats: { small: { url: '' } } },
        author: { name: 'Author 6' },
        publishedAt: '2023-10-06T00:00:00Z',
        slug: 'search-result',
      },
    ];
    fetchPosts.mockResolvedValueOnce({ data: morePosts });

    await act(async () => {
      fireEvent.click(loadMoreBtn);
    });

    expect(fetchPosts).toHaveBeenCalled();
    expect(await screen.findByText('Test Post 5')).toBeInTheDocument();
  });

  it('handles search and updates posts', async () => {
    jest.useFakeTimers();

    await act(async () => {
      render(<PostList initialData={{ data: posts }} />);
    });

    // Mock fetchPosts for search
    const searchPosts = [
      {
        documentId: 6,
        title: 'Search Result',
        content: 'Search content',
        image: { formats: { small: { url: '' } } },
        author: { name: 'Author 6' },
        publishedAt: '2023-10-06T00:00:00Z',
        slug: 'search-result',
      },
    ];
    fetchPosts.mockResolvedValueOnce({ data: searchPosts });

    const input = screen.getByRole('textbox');
    await act(async () => {
      fireEvent.change(input, { target: { value: 'Search Result' } });
      jest.runAllTimers();
    });

    expect(fetchPosts).toHaveBeenCalledWith(
      expect.objectContaining({ query: 'Search Result' })
    );
    expect(screen.getByText('Search Result')).toBeInTheDocument();
  });
});
