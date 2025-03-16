'use client';

import { DUMMY_NEWS } from '@/dummy-news';
import { notFound, useRouter } from 'next/navigation';
import React from 'react';

const InterceptedImagePage = ({ params }) => {
    const newsItemSlug = params?.slug;

    const router = useRouter();

    if (!newsItemSlug) {
      // slug tidak tersedia, langsung notFound agar aman
      notFound();
    }

    const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

    if (!newsItem) {
       notFound();
    }

    return (
      <>
        <div className='modal-backdrop' onClick={router.back} />
        <dialog className='modal' open>
          <div className='fullscreen-image'>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </div>
        </dialog>
      </>
    );
};

export default InterceptedImagePage;
