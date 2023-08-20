import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <nav className="navigation">Nav</nav>
      <Sidebar />
      <div className="leftmenu">Left menu</div>
      <main className="content">Main</main>
      <div className="rightmenu">Right menu</div>
    </div>
  );
}

export default App;
