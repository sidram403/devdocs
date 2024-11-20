import { FC } from 'react'
import Link from 'next/link'

const searchFeatures = [
  {
    title: 'Basic Search',
    description: 'Simple text-based search implementation',
    path: '/search/basic-search'
  },
  {
    title: 'Debounced Search',
    description: 'Search with performance optimization using debounce',
    path: '/search/debounced-search'
  },
  {
    title: 'Advanced Filters',
    description: 'Complex search with multiple filter criteria',
    path: '/search/advanced-filters'
  }
]

const SearchPage: FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Search Functionality</h1>
      
      <p className="text-lg text-gray-600 mb-8">
        Explore different approaches to implementing search functionality in your applications.
      </p>

      <div className="grid gap-6">
        {searchFeatures.map((feature) => (
          <Link
            key={feature.path}
            href={feature.path}
            className="block p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SearchPage