"use client";

import React, { useState } from 'react';

const ToggleSwitch: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex items-center justify-center space-x-4">
      <span className={`font-medium ${isYearly ? 'text-gray-400' : 'text-blue-600'}`}>
        Monthly
      </span>
      
      <div
        className="relative w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
        onClick={() => setIsYearly(!isYearly)}
      >
        {/* Toggle */}
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform ${
            isYearly ? 'translate-x-6' : 'translate-x-0'
          } transition-transform duration-300`}
        ></div>
      </div>

      <span className={`font-medium ${isYearly ? 'text-blue-600' : 'text-gray-400'}`}>
        Yearly
      </span>

      {isYearly && (
        <div className="flex items-center justify-center bg-blue-200 rounded-full px-3 py-1">
          <span className="text-sm font-medium text-blue-800">Save 25%</span>
        </div>
      )}
    </div>
  );
};

export default ToggleSwitch;
