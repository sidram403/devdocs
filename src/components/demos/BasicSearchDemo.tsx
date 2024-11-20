import { FC, useState } from 'react'

interface Item {
  id: number
  name: string
}

const sampleItems: Item[] = [
  { id: 1, name: 'React Development' },
  { id: 2, name: 'Next.js Framework' },
  { id: 3, name: 'TypeScript Programming' },
  { id: 4, name: 'Tailwind CSS' },
  { id: 5, name: 'Node.js Backend' },
  { id: 6, name: 'GraphQL API' },
]

const BasicSearchDemo: FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [items] = useState<Item[]>(sampleItems)

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
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      
      <ul className="mt-4 space-y-2">
        {filteredItems.map(item => (
          <li 
            key={item.id}
            className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BasicSearchDemo