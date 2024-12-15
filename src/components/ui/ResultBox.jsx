export default function ResultBox({ content }) {
  if (!content) return null

  return (
    <div className="rounded-lg border bg-gray-50 p-4">
      <pre className="overflow-auto max-h-96 text-sm">
        <code className="text-gray-800">{content}</code>
      </pre>
    </div>
  )
}
