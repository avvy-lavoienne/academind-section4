import sql from 'better-sqlite3';

// Open the database connection
const db = sql('data.db');

// Get all news
export function getAllNews() {
  const news = db.prepare('SELECT * FROM news').all();
  return news;
}

// Get a specific news item by slug
export function getNewsItem(slug) {
  const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);
  return newsItem;
}

// Get the latest 3 news items
export function getLatestNews() {
  const latestNews = db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all();
  return latestNews;
}

// Get all available news years
export function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);
  return years;
}

// Get all available months for a specific year
export function getAvailableNewsMonths(year) {
  const months = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
  return months;
}

// Get news for a specific year
export function getNewsForYear(year) {
  const news = db
    .prepare("SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC")
    .all(year);
  return news;
}

// Get news for a specific year and month
export function getNewsForYearAndMonth(year, month) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);
  return news;
}
