import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import TodoList from './components/TodoList';
import ContactForm from './components/ContactForm';
import DataFetcher from './components/DataFetcher';
import StateDemo from './components/StateDemo.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Practice App (Vite)</h1>
        <p>Day 7 - Linked Lists & Advanced React Hooks</p>
      </header>

      <main className="App-main">
        <Counter />
        <UserCard />
        <TodoList />
        <ContactForm />
        <DataFetcher />
        <StateDemo />
      </main>
    </div>
  );
}

export default App;