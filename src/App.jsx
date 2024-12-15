import { useState, useEffect } from 'react'
import GumroadApiUI from './components/GumroadApiUI'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    if (localStorage.getItem('darkMode') !== null) {
      return localStorage.getItem('darkMode') === 'true'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Update document class and local storage when dark mode changes
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-end py-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
        <GumroadApiUI />
      </div>
    </div>
  )
}

export default App
