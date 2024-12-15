export default function Card({ children, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        {(title || description) && (
          <div className="mb-6">
            {title && <h2 className="text-2xl font-bold text-gray-900">{title}</h2>}
            {description && <p className="mt-1 text-gray-600">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
