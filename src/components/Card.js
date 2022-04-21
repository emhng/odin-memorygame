import '../styles/Card.css';

const Card = ({ emoji }) => {
  return (
    <div className='card'>
      <div className='emoji-cont'>{emoji}</div>
    </div>
  );
};

export default Card;
