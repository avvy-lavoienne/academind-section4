import Link from 'next/link';
import { getAvailableNewsMonths, getAvailableNewsYears } from '@/lib/news';
import FilteredNews from '../../../../components/filtered-news';
import FullscreenImage from '../../../../components/full-screen-image';  // Add this import

export default async function FilteredNewsPage({ params }) {
  const [selectedYear, selectedMonth] = params.filter || [];

  const availableYears = await getAvailableNewsYears();

  if (selectedYear && !availableYears.includes(selectedYear)) {
    throw new Error('Invalid year parameter.');
  }

  let links = availableYears;

  if (selectedYear && !selectedMonth) {
    links = await getAvailableNewsMonths(selectedYear);
  } else if (selectedYear && selectedMonth) {
    const availableMonths = await getAvailableNewsMonths(selectedYear);
    if (!availableMonths.includes(selectedMonth)) {
      throw new Error('Invalid month parameter.');
    }
    links = [];
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* Directly render your async Server Component */}
      <FilteredNews year={selectedYear} month={selectedMonth} />

      {/* Example of adding an image that opens in fullscreen */}
      <div className="example-image-container">
        <FullscreenImage
          src="https://example.com/your-image.jpg"
          alt="Example Image"
        />
      </div>
    </>
  );
}
