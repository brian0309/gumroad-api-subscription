export default function Input({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full p-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300 ${className}`}
    />
  )
}
