export default function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex rounded-lg bg-gray-100 dark:bg-gray-700 p-1 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`
            flex-1 min-w-[120px] px-3 sm:px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap
            ${activeTab === tab.value 
              ? 'bg-white dark:bg-gray-800 shadow-sm text-gray-900 dark:text-white' 
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
