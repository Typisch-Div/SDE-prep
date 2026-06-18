import { useReducer } from 'react';

// Custom reducer for complex state logic
export function useAppState() {
  const initialState = {
    count: 0,
    todos: [],
    filter: 'all',
    loading: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      
      case 'RESET':
        return { ...state, count: 0 };
      
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
        };
      
      case 'COMPLETE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          )
        };
      
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      
      case 'SET_FILTER':
        return { ...state, filter: action.payload };
      
      case 'SET_LOADING':
        return { ...state, loading: action.payload };
      
      default:
        return state;
    }
  };

  return useReducer(reducer, initialState);
}