import React, { ReactNode } from 'react';
import '../styles/global.css';
import Header from '../components/common/Header.js';
import Footer from '@/components/common/Footer';
import { fetchSetting } from './actions/fetchSetting';
import LayoutProvider from './context/LayoutProvider';

export async function generateMetadata() {
  const siteSetting = await fetchSetting();
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? ''),
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
interface RootLayoutProps {
  children: ReactNode;
}
const RootLayout = async ({ children }: RootLayoutProps) => {
  const siteSetting = await fetchSetting();
  return (
    <html lang='en'>
      <body>
        <LayoutProvider>
          <main className='flex h-screen flex-col justify-between'>
            <Header siteSetting={siteSetting} />
            {children}
            <Footer siteSetting={siteSetting}></Footer>
          </main>
        </LayoutProvider>
      </body>
    </html>
  );
};

export default RootLayout;
