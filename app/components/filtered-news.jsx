// app/archive/[...filter]/components/filtered-news.jsx
import NewsList from '@/app/components/news-list';
import { getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';

export default async function FilteredNews({ year, month }) {
  let news = [];

  try {
    if (year && month) {
      // Fetch news for specific year and month
      news = await getNewsForYearAndMonth(year, month);
    } else if (year && !month) {
      // Fetch news for specific year
      news = await getNewsForYear(year);
    } else {
      // Handle case where year or month is missing (optional, adjust logic as needed)
      news = [];
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    news = [];  // Set to empty array in case of error
  }

  // Return NewsList if there are results, otherwise show no results message
  return news.length > 0 ? <NewsList news={news} /> : <p>No news found</p>;
}
