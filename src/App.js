import React, { useState } from 'react';
import './styles/App.css';
import CardGrid from './components/CardGrid';
import Score from './components/Score';

function App () {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedEmojis, setClickedEmojis] = useState([]);

  return (
    <div id='page-cont'>
      <main className='hflex'>
        <div id='sidebar-cont'>
          <header>
            <h1>Emoji Memory Game</h1>
            <p>Avoid clicking on the same emoji twice!</p>
          </header>
          <section className='vflex' id='score-cont'>
            <Score type='Current' score={currentScore} />
            <Score type='Best' score={bestScore} />
          </section>
        </div>
        <CardGrid
          onClick={event => {
            const emoji = event.target.textContent;

            if (clickedEmojis.indexOf(emoji) === -1) {
              setCurrentScore(currentScore + 1);
              setClickedEmojis(clickedEmojis.concat(emoji));
            } else {
              setCurrentScore(0);
              setClickedEmojis([]);
            }

            if (
              currentScore >= bestScore &&
              clickedEmojis.indexOf(emoji) === -1
            ) {
              setBestScore(currentScore + 1);
            }
          }}
          clickedEmojis={clickedEmojis}
        />
      </main>
    </div>
  );
}

export default App;
