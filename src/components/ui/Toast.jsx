import { Toaster } from 'react-hot-toast'

export default function Toast() {
  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Default options for all toasts
        className: 'bg-white dark:bg-gray-800 dark:text-gray-100',
        duration: 4000,
        style: {
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        // Customize specific toast types
        success: {
          iconTheme: {
            primary: '#10B981',
            secondary: 'white',
          },
          style: {
            border: '1px solid #D1FAE5',
          },
        },
        error: {
          iconTheme: {
            primary: '#EF4444',
            secondary: 'white',
          },
          style: {
            border: '1px solid #FEE2E2',
          },
        },
      }}
    />
  )
}
