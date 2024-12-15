export default function Select({ 
  value, 
  onChange, 
  options,
  className = '',
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`p-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-300 bg-white ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
