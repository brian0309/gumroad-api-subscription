export default function Button({ children, onClick, disabled, variant = 'primary', className = '' }) {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors duration-200 text-sm'
  const variants = {
    primary: 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400',
    tab: 'bg-white hover:bg-gray-50',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
