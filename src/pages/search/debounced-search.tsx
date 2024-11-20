import { FC } from 'react'
import CodeBlock from '@/components/CodeBlock'
import DemoContainer from '@/components/DemoContainer'
import DebouncedSearchDemo from '@/components/demos/DebouncedSearchDemo'

const debouncedSearchCode = `// Debounced Search Component
import { useState, useEffect, ChangeEvent } from 'react'

interface Item {
  id: number
  name: string
  category: string
}

const DebouncedSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [items, setItems] = useState<Item[]>([])

  // Simulate API search
  const searchItems = async (term: string) => {
    setIsSearching(true)
    try {
      const response = await fetch(\`/api/search?q=\${term}\`)
      const data = await response.json()
      setItems(data)
    } finally {
      setIsSearching(false)
    }
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
    }
  }, [debouncedTerm])

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => 
            setSearchTerm(e.target.value)
          }
          placeholder="Search items..."
          className="w-full border rounded-md px-4 py-2"
        />
        {isSearching && (
          <div className="loading-spinner" />
        )}
      </div>
      
      <ul className="mt-4">
        {items.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}`

const DebouncedSearch: FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Debounced Search Implementation</h1>
      
      <div className="prose max-w-none mb-8">
        <p>
          This example demonstrates a debounced search implementation that reduces API calls
          by waiting for the user to stop typing before performing the search. It also
          includes a loading indicator to provide feedback during the search process.
        </p>
      </div>

      <DemoContainer title="Debounced Search">
        <DebouncedSearchDemo />
      </DemoContainer>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Implementation</h2>
        <CodeBlock code={debouncedSearchCode} language="typescript" />
      </div>

      <div className="prose max-w-none">
        <h2>How it works</h2>
        <ul className="list-disc pl-6">
          <li>Uses two state variables: one for immediate input and one for debounced value</li>
          <li>Implements a 300ms delay before triggering the search</li>
          <li>Shows loading indicator during API calls</li>
          <li>Cleanly handles component unmounting with cleanup function</li>
        </ul>

        <h2>Key Benefits</h2>
        <ul className="list-disc pl-6">
          <li>Reduces unnecessary API calls</li>
          <li>Improves performance for expensive search operations</li>
          <li>Provides better user experience with loading feedback</li>
          <li>Prevents race conditions in search results</li>
        </ul>
      </div>
    </div>
  )
}

export default DebouncedSearch