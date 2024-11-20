import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const categories = [
  {
    title: 'Search',
    path: '/search',
    features: ['Basic Search', 'Debounced Search', 'Advanced Filters']
  },
  {
    title: 'Authentication',
    path: '/auth',
    features: ['JWT Auth', 'OAuth', 'Role-based Access']
  },
  {
    title: 'Filtering',
    path: '/filtering',
    features: ['Basic Filters', 'Multi-select Filters', 'Dynamic Filters']
  },
  {
    title: 'Sorting',
    path: '/sorting',
    features: ['Basic Sorting', 'Multi-column Sort', 'Custom Sort']
  }
]

const Sidebar: FC = () => {
  const router = useRouter()

  return (
    <aside className="w-64 bg-gray-50 p-6 border-r">
      <div className="mb-8">
        <Link href="/" className="text-2xl font-bold text-primary">
          DevDocs
        </Link>
      </div>
      <nav>
        {categories.map((category) => (
          <div key={category.path} className="mb-4">
            <Link
              href={category.path}
              className={clsx(
                'block font-medium mb-2 hover:text-primary transition-colors',
                router.pathname.startsWith(category.path) ? 'text-primary' : 'text-gray-700'
              )}
            >
              {category.title}
            </Link>
            <ul className="pl-4 space-y-1">
              {category.features.map((feature) => (
                <li key={feature}>
                  <Link
                    href={`${category.path}/${feature.toLowerCase().replace(/\s+/g, '-')}`}
                    className={clsx(
                      'text-sm hover:text-primary transition-colors',
                      router.pathname === `${category.path}/${feature.toLowerCase().replace(/\s+/g, '-')}`
                        ? 'text-primary'
                        : 'text-gray-600'
                    )}
                  >
                    {feature}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar