// app/archive/[...filter]/components/filtered-news.jsx
import NewsList from '@/app/components/news-list';
import { getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';

export default async function FilteredNews({ year, month }) {
  let news = [];

  if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  } else if (year && !month) {
    news = await getNewsForYear(year);
  }

  return news.length ? <NewsList news={news} /> : <p>No news found</p>;
}
