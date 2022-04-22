import React, { useState } from 'react';
import './styles/App.css';
import CardGrid from './components/CardGrid';
import Score from './components/Score';

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
            <Score type='Current' score='0' />
            <Score type='Best' score='0' />
          </section>
        </div>
        <CardGrid />
      </main>
    </div>
  );
}

export default App;
