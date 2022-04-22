import '../styles/Score.css';

const Score = ({ type, score }) => {
  return (
    <div className='score'>
      <h2>{type} Score</h2>
      <p>{score}</p>
    </div>
  );
};

export default Score;
