export default function Card({ children, title, description, className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-lg border border-gray-200 dark:border-gray-700/50 ${className}`}>
      <div className="p-6">
        {(title || description) && (
          <div className="space-y-1 mb-6">
            {title && <h2 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">{title}</h2>}
            {description && <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
