import { FC, useState, useEffect, ChangeEvent } from 'react'

interface Item {
  id: number
  name: string
  category: string
}

const sampleItems: Item[] = [
  { id: 1, name: 'React Development', category: 'Frontend' },
  { id: 2, name: 'Next.js Framework', category: 'Frontend' },
  { id: 3, name: 'TypeScript Programming', category: 'Language' },
  { id: 4, name: 'Tailwind CSS', category: 'Styling' },
  { id: 5, name: 'Node.js Backend', category: 'Backend' },
  { id: 6, name: 'GraphQL API', category: 'API' },
]

const DebouncedSearchDemo: FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [items, setItems] = useState<Item[]>(sampleItems)

  // Simulate API delay
  const searchItems = async (term: string) => {
    setIsSearching(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const filtered = sampleItems.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    )
    setItems(filtered)
    setIsSearching(false)
  }

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm])

  // Perform search when debounced term changes
  useEffect(() => {
    if (debouncedTerm) {
      searchItems(debouncedTerm)
    } else {
      setItems(sampleItems)
    }
  }, [debouncedTerm])

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          placeholder="Search items..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        {isSearching && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
          </div>
        )}
      </div>
      
      <ul className="mt-4 space-y-2">
        {items.map(item => (
          <li 
            key={item.id}
            className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
          >
            <div className="flex justify-between items-center">
              <span>{item.name}</span>
              <span className="text-sm text-gray-500">{item.category}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DebouncedSearchDemo