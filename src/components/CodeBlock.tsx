import { FC } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeBlockProps {
  code: string
  language: string
}

const CodeBlock: FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <div className="relative">
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
      >
        Copy
      </button>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        className="rounded-lg !bg-gray-900"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock