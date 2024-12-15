export default function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex rounded-lg bg-gray-100 dark:bg-gray-700 p-1">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`
            flex-1 px-4 py-2 text-sm font-medium rounded-md
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
