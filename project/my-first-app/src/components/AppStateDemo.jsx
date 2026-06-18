import { useAppState } from '../hooks/useReducer';
import './AppStateDemo.css';

function AppStateDemo() {
  const [state, dispatch] = useAppState();

  const handleAddTodo = () => {
    const text = prompt('Enter todo:');
    if (text) {
      dispatch({ type: 'ADD_TODO', payload: text });
    }
  };

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'completed') return todo.completed;
    if (state.filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="app-state-demo">
      <h2>Advanced State Management Pattern</h2>
      
      {/* Counter Section */}
      <div className="section">
        <h3>Counter (useReducer)</h3>
        <div className="counter-display">{state.count}</div>
        <div className="button-group">
          <button onClick={() => dispatch({ type: 'INCREMENT' })} className="btn btn-primary">
            +
          </button>
          <button onClick={() => dispatch({ type: 'RESET' })} className="btn btn-secondary">
            Reset
          </button>
          <button onClick={() => dispatch({ type: 'DECREMENT' })} className="btn btn-danger">
            -
          </button>
        </div>
      </div>

      {/* Todo Section */}
      <div className="section">
        <h3>Todo Management</h3>
        <div className="todo-controls">
          <button onClick={handleAddTodo} className="btn btn-primary">
            Add Todo
          </button>
          
          <div className="filter-buttons">
            {['all', 'pending', 'completed'].map(filter => (
              <button
                key={filter}
                onClick={() => dispatch({ type: 'SET_FILTER', payload: filter })}
                className={`filter-btn ${state.filter === filter ? 'active' : ''}`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: 'COMPLETE_TODO', payload: todo.id })}
              />
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                className="delete-btn"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
        
        {filteredTodos.length === 0 && <p className="empty-state">No todos here!</p>}
        <p className="todo-count">Total: {state.todos.length} | Completed: {state.todos.filter(t => t.completed).length}</p>
      </div>

      {/* State Display */}
      <div className="state-display">
        <h3>Current State (Reducer)</h3>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default AppStateDemo;