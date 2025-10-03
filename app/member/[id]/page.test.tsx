import '@testing-library/jest-dom';
import { render, act, screen } from '@testing-library/react';
import MemberPage from './page';
import { fetchAPI } from '../../../lib/api';
import { ReactElement } from 'react';

// mock fetchAPI
jest.mock('../../../lib/api', () => ({
  fetchAPI: jest.fn(),
}));
jest.mock('../../../components/member/member');

interface MemberPageProps {
  params: {
    id: string;
  };
}
// helper wrapper: allows rendering async server component
const renderAsync = async (
  Comp: (props: MemberPageProps) => Promise<ReactElement> | ReactElement
) => {
  const ui = await Comp({ params: { id: '123' } });
  return render(ui);
};

describe('MemberPage', () => {
  it('renders Member Page', async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce({
      data: [
        {
          id: 1,
          documentId: 'member-1-uuid',
          name: 'John Doe',
          designation: 'Lead Developer',
          bio: 'Lorem ipsum dolor sit amet.',
          photo: {
            formats: { small: { url: 'https://example.com/john-doe.jpg' } },
          },
          articles: [
            {
              documentId: 1,
              title: 'Test Post 1',
              content: 'This is the content of Test Post 1',
              image: { formats: { small: { url: '' } } },
              author: { name: 'Author 1' },
              publishedAt: '2023-10-01T00:00:00Z',
              slug: 'test-post-1',
            },
          ],
        },
      ],
    });
    await act(async () => {
      renderAsync(MemberPage);
    });
  });

  it('renders Member Page Heading', async () => {
    (fetchAPI as jest.Mock).mockResolvedValueOnce({
      data: [
        {
          id: 1,
          documentId: 'member-1-uuid',
          name: 'John Doe',
          designation: 'Lead Developer',
          bio: 'Lorem ipsum dolor sit amet.',
          photo: {
            formats: { small: { url: 'https://example.com/john-doe.jpg' } },
          },
          articles: [
            {
              documentId: 1,
              title: 'Test Post 1',
              content: 'This is the content of Test Post 1',
              image: { formats: { small: { url: '' } } },
              author: { name: 'Author 1' },
              publishedAt: '2023-10-01T00:00:00Z',
              slug: 'test-post-1',
            },
          ],
        },
      ],
    });
    await act(async () => {
      renderAsync(MemberPage);
    });
    const heading = screen.getByRole('heading', { name: /Team Member/i });
    expect(heading).toBeInTheDocument();
  });
});
