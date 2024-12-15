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
      className={`p-2 border border-gray-200 dark:border-gray-600 rounded-md text-sm 
        focus:outline-none focus:border-gray-300 dark:focus:border-gray-500 
        bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
        ${className}`}
    >
      {options.map((option) => (
        <option 
          key={option.value} 
          value={option.value}
          className="bg-white dark:bg-gray-700"
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}
