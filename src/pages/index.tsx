import { FC } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Search Functionality',
    description: 'Implement powerful search features with different approaches',
    path: '/search'
  },
  {
    title: 'Authentication',
    description: 'Secure your application with various auth methods',
    path: '/auth'
  },
  {
    title: 'Filtering',
    description: 'Add robust filtering capabilities to your data',
    path: '/filtering'
  },
  {
    title: 'Sorting',
    description: 'Implement flexible sorting mechanisms',
    path: '/sorting'
  }
]

const Home: FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Developer Documentation</h1>
        <p className="text-xl text-gray-600">
          Find and implement common functionalities for your projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <Link
            key={feature.path}
            href={feature.path}
            className="block p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <ArrowRightIcon className="w-5 h-5 text-primary" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home