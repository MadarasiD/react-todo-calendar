import React from 'react';
import './App.css';
import Timer from './components/Timer';
import TodoList from './components/TodoList';


function App() {
  return (
    <div class="grid-container">
      <div class="grid-item">
            <div className='todo-app'>
                <TodoList />
            </div>
      </div>
          
      <div class="grid-item">

      </div>
      

      <div class="grid-item">
            <div className="time-app">
              <Timer date={ new Date()}/>
            </div>
          </div>
      
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
    </div>
  );
}

export default App;
