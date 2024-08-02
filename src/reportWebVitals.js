/**
 * Reports web vitals metrics to the provided callback function.
 * 
 * @param {Function} onPerfEntry - A callback function that will be called with web vitals metrics.
 */
const reportWebVitals = (onPerfEntry) => {
  /**
   * Check if the provided callback function is valid.
   */
  if (onPerfEntry && onPerfEntry instanceof Function) {
    /**
     * Dynamically import the 'web-vitals' module.
     */
    import('web-vitals').then(({ 
      /**
       * Get the Cumulative Layout Shift (CLS) metric.
       */
      getCLS, 
      /**
       * Get the First Input Delay (FID) metric.
       */
      getFID, 
      /**
       * Get the First Contentful Paint (FCP) metric.
       */
      getFCP, 
      /**
       * Get the Largest Contentful Paint (LCP) metric.
       */
      getLCP, 
      /**
       * Get the Time To First Byte (TTFB) metric.
       */
      getTTFB 
    }) => {
      /**
       * Call the provided callback function with each web vitals metric.
       */
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/**
 * Export the reportWebVitals function as the default export.
 */
export default reportWebVitals;