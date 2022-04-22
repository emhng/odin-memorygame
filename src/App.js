import React, { useState } from 'react';
import './styles/App.css';
import CardGrid from './components/CardGrid';

function App () {
  return (
    <div id='page-cont'>
      <main className='hflex'>
        <div id='sidebar-cont'>
          <header>
            <h1>Emoji Memory Game</h1>
            <p>Avoid clicking on the same emoji twice!</p>
          </header>
          <section className='vflex' id='score-cont'>
            <div className='score'>
              <h2>Current Score</h2>
              <p>0</p>
            </div>
            <div className='score'>
              <h2>Best Score</h2>
              <p>0</p>
            </div>
          </section>
        </div>
        <CardGrid />
      </main>
    </div>
  );
}

export default App;
