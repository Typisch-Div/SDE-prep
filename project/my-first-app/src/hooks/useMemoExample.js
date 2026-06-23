import { useMemo, useCallback } from 'react';

/**
 * useMemo: Memoize expensive calculations
 * useCallback: Memoize function references (prevent re-renders of child components)
 */

export function useOptimization() {
  // Example: Expensive calculation
  const expensiveArray = useMemo(() => {
    console.log('Computing expensive array...');
    return Array.from({ length: 1000000 }, (_, i) => i * 2);
  }, []); // Only compute once

  // Example: Memoized callback
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []); // Function reference never changes

  return { expensiveArray, handleClick };
}