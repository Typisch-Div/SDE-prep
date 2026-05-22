import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import UserCard from './components/UserCard';
import TodoList from './components/TodoList';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Practice App (Vite)</h1>
      </header>

      <main className="App-main">
        <Counter />
        <UserCard />
        <TodoList />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;