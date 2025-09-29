import '@testing-library/jest-dom';
import { render, act, screen } from '@testing-library/react';
import BlogPage from './page';

// mock fetchAPI
jest.mock('../../lib/api', () => ({
  fetchAPI: jest.fn(),
}));

jest.mock('../../components/blog/post-list');

// helper wrapper: allows rendering async server component
const renderAsync = async (Comp) => {
  const ui = await Comp();
  return render(ui);
};

describe('BlogsPage', () => {
  it('renders Blogs Page', async () => {
    await act(async () => {
      renderAsync(BlogPage);
    });
  });

  it('renders Blogs Page Heading', async () => {
    await act(async () => {
      renderAsync(BlogPage);
    });
    const heading = screen.getByRole('heading', { name: /Blogs/i });
    expect(heading).toBeInTheDocument();
  });
});
