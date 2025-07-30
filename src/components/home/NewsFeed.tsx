'use client';

import NewsCard from './NewsCard';

const mockNews = Array(10).fill({
  date: '22.05.2025',
  tags: ['News', 'Tournament', 'Update', 'ZZZ'],
  title:
    'Headline long long long long longgggg  longgggg  longgggg long long long long longgggg  longgggg   longgggg  ',
  preview:
    'Main long text sdjbfdksbf dsfhjbkds akjsd sdjksbdalfhfiallsald sakdjskjdhalshdlhsldh asjdgbaslkjd askjdbasklajsdhlala. Main long text sdjbfdksbf dsfhjbkds akjsd sdjksbdalfhfiallsald ',
  image: '/news-img.png',
});

export default function NewsFeed() {
  return (
    <section className="w-full mx-auto mb-5">
      <h2 className="font-bold italic mb-4">News</h2>

      <div className="flex flex-col gap-3">
        {mockNews.map((item, index) => (
          <NewsCard
            key={index}
            date={item.date}
            tags={item.tags}
            title={item.title}
            preview={item.preview}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
