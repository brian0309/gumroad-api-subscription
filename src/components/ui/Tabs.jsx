export default function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex rounded-lg bg-gray-100 p-1">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`
            flex-1 px-4 py-2 text-sm font-medium rounded-md
            ${activeTab === tab.value 
              ? 'bg-white shadow-sm' 
              : 'text-gray-500 hover:text-gray-700'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
