import NewsList from '@/app/components/news-list'
import { getNewsForYear } from '@/lib/news';
import React from 'react'

const FilteredNewsPage = (params) => {
    const newsYear = params.year;
    const news = getNewsForYear(newsYear);

  return 
   <>
        <h1>News Page</h1>
        <NewsList news={news} />
    </>
}

export default FilteredNewsPage