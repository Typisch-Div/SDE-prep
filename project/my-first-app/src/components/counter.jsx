import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  return (
    <div className="counter-card">
      <h2>Counter App</h2>
      
      <div className="counter-display">
        <p className="big-number">{count}</p>
      </div>

      <div className="step-control">
        <label>Step:</label>
        <input 
          type="number" 
          value={step}
          onChange={(e) => setStep(parseInt(e.target.value))}
          min="1"
        />
      </div>

      <div className="button-group">
        <button onClick={decrement} className="btn btn-danger">
          -{step}
        </button>
        <button onClick={reset} className="btn btn-secondary">
          Reset
        </button>
        <button onClick={increment} className="btn btn-success">
          +{step}
        </button>
      </div>

      <p className="info">Current Count: {count}</p>
    </div>
  );
}

export default Counter;