import React from 'react';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {




  return (
    <div className="app">
      <header className="App-header">
        <h1>Simple To-Do List</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
