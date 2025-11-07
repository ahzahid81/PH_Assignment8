import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // your logo

const LoaderWrapper = ({ children, loadingProp }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // For page navigation
  useEffect(() => {
    if (!loadingProp) { // only for page navigation
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 500); // 0.5s demo, adjust as needed
      return () => clearTimeout(timer);
    }
  }, [location, loadingProp]);

  // If parent passes loadingProp (like search), override
  const isLoading = loadingProp !== undefined ? loadingProp : loading;

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <img
          src={logo}
          alt="Loading"
          className="w-20 h-20"
          style={{
            animation: 'spinScale 1s linear infinite',
          }}
        />
        <style>
          {`
            @keyframes spinScale {
              0%, 100% { transform: rotate(0deg) scale(1); }
              50% { transform: rotate(180deg) scale(1.5); }
            }
          `}
        </style>
      </div>
    );
  }

  return children;
};

export default LoaderWrapper;
