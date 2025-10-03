'use client';

import Loader from '@/components/common/Loader';

export default function GlobalLoading() {
  return (
    <div className='container mx-auto px-6 py-16 text-center'>
      <Loader />
    </div>
  );
}
