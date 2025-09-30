'use client';
import Image from 'next/image';
import React from 'react';
import LayoutContext from '@/app/context/layoutContext';
import { useContext } from 'react';

export default function Home() {
  const { data } = useContext(LayoutContext);

  return (
    <>
      <section className='bg-white py-16 lg:py-24'>
        <div className='container mx-auto px-6 lg:px-8'>
          <div className='flex flex-col items-center text-center'>
            <h1 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
              {data.company_name} is your Partner in Scalable Software Solutions
            </h1>
            <p className='mb-8 max-w-2xl text-lg text-gray-600 md:text-xl'>
              We specialize in turning complex ideas into robust,
              high-performance applications using cutting-edge technologies like
              React, Next.js, Java, .NET, Python, and AI.
            </p>
            <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
              <a
                href='/services'
                className='rounded-full border border-indigo-600 bg-white px-8 py-3 text-lg font-medium text-indigo-600 transition-colors duration-300 hover:bg-gray-100'
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id='technologies' className='bg-gray-100 py-16 lg:py-24'>
        <div className='container mx-auto px-6 lg:px-8'>
          <h2 className='mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl'>
            Our Technology Stack
          </h2>
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            <div className='flex flex-col items-center'>
              <Image
                src='https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg'
                alt='PHP'
                className='mb-2'
                width={64}
                height={64}
                priority
              />
              <span className='text-sm font-medium text-gray-600'>PHP</span>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                alt='React'
                className='mb-2'
                width={64}
                height={64}
                priority
              />
              <span className='text-sm font-medium text-gray-600'>React</span>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src='https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'
                alt='Next.js'
                className='mb-2'
                width={64}
                height={64}
                priority
              />
              <span className='text-sm font-medium text-gray-600'>Next.js</span>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
                alt='TypeScript'
                className='mb-2'
                width={64}
                height={64}
                priority
              />
              <span className='text-sm font-medium text-gray-600'>
                TypeScript
              </span>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png'
                alt='Java'
                className='mb-2'
                width={64}
                height={64}
                max-height={64}
                priority
              />
              <span className='text-sm font-medium text-gray-600'>Java</span>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src='https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg'
                alt='.NET'
                className='mb-2'
                width={64}
                height={64}
                priority
              />
              <span className='text-sm font-medium text-gray-600'>.NET</span>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/150px-Python-logo-notext.svg.png'
                alt='Python'
                className='mb-2'
                width={64}
                height={64}
                priority
              />
              <span className='text-sm font-medium text-gray-600'>Python</span>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png/120px-Dall-e_3_%28jan_%2724%29_artificial_intelligence_icon.png'
                alt='AI'
                className='mb-2'
                width={64}
                height={64}
                priority
              />
              <span className='text-sm font-medium text-gray-600'>AI</span>
            </div>
          </div>
        </div>
      </section>

      <section id='testimonials' className='bg-gray-50 py-16 lg:py-24'>
        <div className='container mx-auto px-6 lg:px-8'>
          <h2 className='mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl'>
            What Our Clients Say
          </h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='rounded-xl bg-white p-8 shadow-md'>
              <p className='mb-4 text-gray-600 italic'>
                &quot;The team delivered a scalable{' '}
                <strong>Next.js platform</strong> that exceeded our
                expectations. Their technical expertise and communication were
                second to none.&quot;
              </p>
              <div className='mb-4 flex items-center text-sm text-gray-500'>
                <span className='mr-3'>John Doe</span>
                {' • '}
                <span className='ml-3'>CTO, Tech Solutions Inc.</span>
              </div>
            </div>
            <div className='rounded-xl bg-white p-8 shadow-md'>
              <p className='mb-4 text-gray-600 italic'>
                &quot;Their expertise in <strong>Java and .NET</strong> allowed
                us to seamlessly integrate our legacy systems with a new, robust
                backend. The project was delivered on time and within
                budget.&quot;
              </p>
              <div className='mb-4 flex items-center text-sm text-gray-500'>
                <span className='mr-3'>Jane Smith</span>
                {' • '}
                <span className='ml-3'>
                  Director of Engineering, Innovate Co.
                </span>
              </div>
            </div>
            <div className='rounded-xl bg-white p-8 shadow-md'>
              <p className='mb-4 text-gray-600 italic'>
                &quot;The <strong>Python and AI</strong> skills of the team
                helped us build a powerful data analysis tool that has
                revolutionized our operations. They are true innovators.&quot;
              </p>
              <div className='mb-4 flex items-center text-sm text-gray-500'>
                <span className='mr-3'>Michael Brown</span>
                {' • '}
                <span className='ml-3'>Founder, Data Insights LLC</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
