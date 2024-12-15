import React, { useState } from 'react';

const InputWithButton = ({ 
  onSubmit, 
  buttonText = 'Submit', 
  placeholder = 'Enter text...', 
  disabled = false,
  className = "" 
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-1 min-w-0 px-4 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg
          focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none
          disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
      />
      <button
        onClick={handleSubmit}
        disabled={disabled || !inputValue.trim()}
        className="inline-flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-lg
          disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
          enabled:bg-blue-600 enabled:text-white enabled:hover:bg-blue-700 enabled:active:bg-blue-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default InputWithButton;
