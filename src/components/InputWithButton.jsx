import React, { useState } from 'react';

const InputWithButton = ({ onSubmit, buttonText = 'Submit', placeholder = 'Enter text...' }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default InputWithButton;
