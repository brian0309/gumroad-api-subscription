export default function Card({ children, title, description, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 ${className}`}>
      <div className="p-6">
        {(title || description) && (
          <div className="space-y-1 mb-6">
            {title && <h2 className="text-xl font-semibold text-gray-900 tracking-tight">{title}</h2>}
            {description && <p className="text-sm text-gray-500 leading-relaxed">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
