import { useState, useMemo, useCallback, memo } from 'react';
import { usePerformance } from '../hooks/usePerformance';
import './PerformanceDemo.css';

// STEP 1: Memoized Child Component (prevents re-render if props don't change)
const ExpensiveChild = memo(({ data, onUpdate }) => {
  console.log('ExpensiveChild rendered');
  return (
    <div className="expensive-child">
      <h4>Expensive Calculation Result</h4>
      <p>Sum of array: {data}</p>
      <button onClick={onUpdate}>Trigger Parent Update</button>
    </div>
  );
});

function PerformanceDemo() {
  const perf = usePerformance('PerformanceDemo');
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // STEP 2: useMemo - Only recalculate when count changes
  const expensiveCalculation = useMemo(() => {
    console.log('🔴 Expensive calculation running...');
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    return sum;
  }, [count]); // Only runs when count changes

  // STEP 3: useCallback - Prevent child re-renders
  const handleChildUpdate = useCallback(() => {
    console.log('Child updated!');
  }, []);

  return (
    <div className="performance-demo">
      <h2>React Performance Optimization Techniques</h2>

      <div className="demo-section">
        <h3>1. useMemo - Cache Expensive Calculations</h3>
        <p>Calculation result: {expensiveCalculation}</p>
        <button onClick={() => setCount(count + 1)} className="btn btn-primary">
          Increment Count ({count})
        </button>
        <p className="info">✅ Calculation only runs when count changes!</p>
      </div>

      <div className="demo-section">
        <h3>2. Input (Causes Unnecessary Renders Without Optimization)</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p className="info">⚠️ Try typing - watch console for renders!</p>
      </div>

      <div className="demo-section">
        <h3>3. Memoized Child Component (memo())</h3>
        <p className="info">✅ Child only re-renders if props change!</p>
        <ExpensiveChild 
          data={expensiveCalculation} 
          onUpdate={handleChildUpdate}
        />
      </div>

      <div className="demo-section">
        <h3>Performance Metrics</h3>
        <p>Component renders: {perf.renderCount}</p>
        <p>Average render time: {perf.averageRenderTime}ms</p>
        <p className="info">
          🎯 Watch your browser console to see optimization in action!
        </p>
      </div>

      <div className="tips">
        <h3>🎯 When to Use Each:</h3>
        <ul>
          <li><strong>useMemo:</strong> Cache expensive calculations</li>
          <li><strong>useCallback:</strong> Memoize function refs for child props</li>
          <li><strong>memo():</strong> Prevent child re-renders</li>
          <li><strong>React.lazy:</strong> Code splitting for large apps</li>
        </ul>
      </div>
    </div>
  );
}

export default PerformanceDemo;