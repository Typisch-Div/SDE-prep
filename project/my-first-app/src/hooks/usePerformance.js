import { useEffect, useRef } from 'react';

/**
 * Hook to monitor component render performance
 * Shows rendering time and unnecessary re-renders
 */
export function usePerformance(componentName) {
  const renderCount = useRef(0);
  const renderTimes = useRef([]);

  useEffect(() => {
    const startTime = performance.now();
    renderCount.current += 1;

    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      renderTimes.current.push(renderTime);

      console.log(`${componentName} - Render #${renderCount.current}`);
      console.log(`Render time: ${renderTime.toFixed(2)}ms`);
      console.log(`Average render time: ${(
        renderTimes.current.reduce((a, b) => a + b, 0) / renderTimes.current.length
      ).toFixed(2)}ms`);
    };
  });

  return {
    renderCount: renderCount.current,
    averageRenderTime: (
      renderTimes.current.reduce((a, b) => a + b, 0) / renderTimes.current.length
    ).toFixed(2)
  };
}