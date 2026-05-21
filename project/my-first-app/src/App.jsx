import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Practice App (Vite)</h1>
        <p>Day 5 - Building React Components</p>
      </header>

      <main className="App-main">
        <Counter />
        <UserCard />
        <TodoList />
      </main>
    </div>
  );
}

export default App;