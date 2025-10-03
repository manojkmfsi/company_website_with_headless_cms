import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import blog from './page';
import { ReactElement } from 'react';

// mock fetchAPI
jest.mock('../../../lib/api', () => ({
  fetchAPI: jest.fn(),
}));

import { fetchAPI } from '../../../lib/api';

const post = {
  documentId: 1,
  title: 'Test Post 1',
  content: 'This is the content of Test Post 1',
  image: { formats: { small: { url: '' } } },
  author: { name: 'Author 1' },
  publishedAt: '2023-10-01T00:00:00Z',
  slug: 'test-post-1',
};

interface BlogPageProps {
  params: {
    slug: string;
  };
}

// helper wrapper: allows rendering async server component
const renderAsync = async (
  Comp: (props: BlogPageProps) => Promise<ReactElement> | ReactElement
) => {
  const ui = await Comp({ params: { slug: 'post-slug' } });
  return render(ui);
};

describe('BlogPage', () => {
  it('renders Blog Page', async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce({
      data: [post],
    });

    await renderAsync(blog);

    expect(screen.getByRole('heading', { name: /Blog/i })).toBeInTheDocument();
  });

  it('renders Blog Page Heading', async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce({
      data: [post],
    });

    await renderAsync(blog);

    const heading = screen.getByRole('heading', { name: /Blog/i });
    expect(heading).toBeInTheDocument();
  });
});
