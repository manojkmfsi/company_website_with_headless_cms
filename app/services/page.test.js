import '@testing-library/jest-dom';
import { render, act, screen } from '@testing-library/react';
import ServicePage from './page';
import { fetchAPI } from '../../lib/api';
import React from 'react';

// mock fetchAPI
jest.mock('../../lib/api', () => ({
  fetchAPI: jest.fn(),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Build modern web apps',
    price: 5000,
    image: { url: '/web.jpg' },
  },
  {
    id: 2,
    title: 'AI Solutions',
    description: 'AI powered apps',
    price: 8000,
    image: { url: '/ai.jpg' },
  },
];

// helper wrapper: allows rendering async server component
const renderAsync = async (Comp) => {
  const ui = await Comp({ params: { id: '123' } });
  return render(ui);
};

describe('ServicePage', () => {
  it('renders Services', async () => {
    fetchAPI.mockResolvedValueOnce({
      data: services,
    });
    await act(async () => {
      renderAsync(ServicePage);
    });
  });

  it('renders Service Page Heading', async () => {
    fetchAPI.mockResolvedValueOnce({
      data: services,
    });

    await act(async () => {
      renderAsync(ServicePage);
    });
    const heading = screen.getByRole('heading', {
      name: /Our Comprehensive Services/i,
    });
    expect(heading).toBeInTheDocument();

    services.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
      expect(screen.getByText('$ ' + service.price)).toBeInTheDocument();
      expect(screen.getByAltText(service.title)).toHaveAttribute(
        'src',
        service.image.url
      );
    });
  });
});
