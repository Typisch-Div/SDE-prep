import { useState } from 'react';
import './StateDemo.css';

function StateDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [items, setItems] = useState(['React', 'JavaScript', 'CSS']);
  const [showItems, setShowItems] = useState(true);

  const addItem = () => {
    if (name.trim()) {
      setItems([...items, name]);
      setName('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="state-demo-card">
      <h2>State Management Demo</h2>

      <div className="section">
        <h3>Counter with State</h3>
        <div className="counter-display">{count}</div>
        <div className="button-group">
          <button onClick={incrementCount} className="btn btn-primary">
            Increment (+1)
          </button>
          <button onClick={() => setCount(0)} className="btn btn-secondary">
            Reset
          </button>
          <button 
            onClick={() => setCount(count - 1)} 
            className="btn btn-danger"
          >
            Decrement (-1)
          </button>
        </div>
        <p>Count value: {count}</p>
      </div>

      <div className="section">
        <h3>List Management with State</h3>

        <div className="list-input">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
            placeholder="Add new skill..."
          />
          <button onClick={addItem} className="btn btn-primary">
            Add
          </button>
        </div>

        <button
          onClick={() => setShowItems(!showItems)}
          className="btn btn-secondary"
        >
          {showItems ? 'Hide Items' : 'Show Items'}
        </button>

        {showItems && (
          <ul className="items-list">
            {items.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
                <button
                  onClick={() => removeItem(index)}
                  className="btn btn-danger btn-small"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        <p>Total items: {items.length}</p>
      </div>

      <div className="state-info">
        <h3>Current State</h3>
        <pre>
          {JSON.stringify(
            { count, name, itemsCount: items.length, showItems },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
}

export default StateDemo;