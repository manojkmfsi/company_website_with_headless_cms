import React from 'react';
import '../styles/global.css';
import Header from '../components/common/Header.js';
import { fetchAPI } from '../lib/api';
import Footer from '@/components/common/Footer';
import PropTypes from 'prop-types';
import { cache } from 'react';

export const fetchData = cache(async () => {
  try {
    const responseData = await fetchAPI('/api/site-setting?populate=*', {
      next: { revalidate: 60 },
    });
    return responseData?.data;
  } catch (error) {
    console.error(error);
    return { error: error };
  }
});

export async function generateMetadata() {
  const siteSetting = await fetchData();
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: {
      default:
        siteSetting.company_name +
        ' | Your Partner in Scalable Software Solutions',
      template: '%s | ' + siteSetting.company_name,
    },
    description: 'Your Partner in Scalable Software Solutions.',
    keywords: [
      'service + software',
      'react',
      'nextjs',
      'tailwindcss',
      'php',
      'laravel',
      'javascript',
      'nodejs',
    ],
    authors: [{ name: siteSetting.company_name }],
    creator: siteSetting.company_name,
    publisher: siteSetting.company_name,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: process.env.NEXT_PUBLIC_BASE_URL,
      title: siteSetting.company_name + ' - Professional Service',
      description: 'Your Partner in Scalable Software Solutions',
      images: [
        {
          url: siteSetting.logo?.url,
          width: 100,
          height: 100,
          alt: 'logo',
        },
      ],
      siteName: siteSetting.company_name,
    },
    twitter: {
      card: 'summary_large_image',
      title: siteSetting.company_name + ' - Professional Service',
      description: 'Engaging description for Twitter sharing',
      images: [siteSetting.logo?.url],
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
    other: {
      'theme-color': '#101828',
      'msapplication-TileColor': '#101828',
    },
  };
}

const RootLayout = async ({ children }) => {
  const siteSetting = await fetchData();
  return (
    <html lang='en'>
      <body>
        <main className='flex h-screen flex-col justify-between'>
          <Header siteSetting={siteSetting} />
          {children}
          <Footer siteSetting={siteSetting}></Footer>
        </main>
      </body>
    </html>
  );
};
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default RootLayout;
