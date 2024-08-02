/**
 * Import required modules from @testing-library/react
 * 
 * @param {Function} render - A function to render the React component.
 * @param {Object} screen - An object that provides methods to query the rendered component.
 */
import { render, screen } from '@testing-library/react';

/**
 * Import the App component from the ./App module.
 */
import App from './App';

/**
 * Define a test case for the App component.
 * 
 * @description This test case checks if the App component renders a link with the text "learn react".
 */
test('renders learn react link', () => {
  /**
   * Render the App component using the render function.
   */
  render(<App />);

  /**
   * Use the screen.getByText method to query the rendered component and find an element that contains the text "learn react" (case-insensitive).
   */
  const linkElement = screen.getByText(/learn react/i);

  /**
   * Use the expect function from Jest to assert that the linkElement is present in the document.
   */
  expect(linkElement).toBeInTheDocument();
});