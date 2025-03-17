import ModalBackdrop from '@/app/components/modal-backdrop';
import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function InterceptedImagePage({ params }) {
    const newsItemSlug = params?.slug;

    if (!newsItemSlug) {
      // slug tidak tersedia, langsung notFound agar aman
      notFound();
    }

    const newsItem = await getNewsItem(newsItemSlug);

    if (!newsItem) {
       notFound();
    }

    return (
      <>
      <ModalBackdrop />
        <dialog className='modal' open>
          <div className='fullscreen-image'>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </div>
        </dialog>
      </>
    );
};

