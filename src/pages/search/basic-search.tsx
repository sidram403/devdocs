import { FC } from 'react'
import CodeBlock from '@/components/CodeBlock'
import DemoContainer from '@/components/DemoContainer'
import BasicSearchDemo from '@/components/demos/BasicSearchDemo'

const basicSearchCode = `// Basic Search Component
import { useState } from 'react'

interface Item {
  id: number
  name: string
}

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'React Development' },
    { id: 2, name: 'Next.js Framework' },
    { id: 3, name: 'TypeScript Programming' },
    // ... more items
  ])

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items..."
        className="w-full border rounded-md px-4 py-2"
      />
      
      <ul className="mt-4 space-y-2">
        {filteredItems.map(item => (
          <li key={item.id} className="p-3 bg-gray-50 rounded-md">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}`

const BasicSearch: FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Basic Search Implementation</h1>
      
      <div className="prose max-w-none mb-8">
        <p>
          This example shows a simple search implementation that filters an array of items
          based on user input. The search is case-insensitive and updates in real-time
          as the user types.
        </p>
      </div>

      <DemoContainer title="Basic Search">
        <BasicSearchDemo />
      </DemoContainer>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Implementation</h2>
        <CodeBlock code={basicSearchCode} language="typescript" />
      </div>

      <div className="prose max-w-none">
        <h2>How it works</h2>
        <ul className="list-disc pl-6">
          <li>Uses useState to manage the search term and items list</li>
          <li>Filters items array based on the current search term</li>
          <li>Updates filtered results in real-time as user types</li>
          <li>Case-insensitive search using toLowerCase()</li>
        </ul>
      </div>
    </div>
  )
}

export default BasicSearch