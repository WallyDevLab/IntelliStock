/**
 * Import necessary dependencies
 */
import React from 'eact'; // Import React library
import ReactDOM from 'eact-dom/client'; // Import ReactDOM library for rendering
import './index.css'; // Import global CSS styles
import App from './App'; // Import App component
import reportWebVitals from './reportWebVitals'; // Import reportWebVitals function for performance monitoring

/**
 * Create a root element for rendering the app
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Render the App component in strict mode
 */
root.render(
  /**
   * Enable React Strict Mode for development
   * This helps catch errors and warnings in the app
   */
  <React.StrictMode>
    /**
     * Render the App component
     */
    <App />
  </React.StrictMode>
);

/**
 * Report web vitals for performance monitoring
 */
reportWebVitals();