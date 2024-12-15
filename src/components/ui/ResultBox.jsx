export default function ResultBox({ content }) {
  if (!content) return null

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-4">
      <pre className="overflow-auto max-h-96 text-sm">
        <code className="text-gray-800 dark:text-gray-200">{content}</code>
      </pre>
    </div>
  )
}
