import { FC, ReactNode } from 'react'

interface DemoContainerProps {
  title: string
  children: ReactNode
}

const DemoContainer: FC<DemoContainerProps> = ({ title, children }) => {
  return (
    <div className="mb-8 border rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-4 py-2 border-b">
        <h3 className="font-medium text-gray-700">Live Demo: {title}</h3>
      </div>
      <div className="p-6 bg-white">{children}</div>
    </div>
  )
}

export default DemoContainer