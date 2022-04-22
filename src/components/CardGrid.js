import '../styles/CardGrid.css';
import Card from '../components/Card';

const CardGrid = ({ onClick }) => {
  const emojiList = [
    '😀 ',
    '😃',
    '😄',
    '😁',
    '😆',
    '😅',
    '😂',
    '🤣',
    '🥲',
    '☺️',
    '😊',
    '😇',
    '🙂',
    '🙃',
    '😉',
    '😌',
    '😍',
    '🥰',
    '😘',
    '😗',
    '😙',
    '😚',
    '😋',
    '😛',
    '😝',
    '😜',
    '🤪',
    '🤨',
    '🧐',
    '🤓',
    '😎',
    '🥸',
    '🤩',
    '🥳',
    '😏',
    '😒',
    '😞',
    '😔',
    '😟',
    '😕',
    '🙁',
    '☹️',
    '😣',
    '😖',
    '😫',
    '😩',
    '🥺',
    '😢',
    '😭',
    '😤',
    '😠',
    '😡',
    '🤬',
    '🤯',
    '😳',
    '🥵',
    '🥶',
    '😱',
    '😨',
    '😰',
    '😥',
    '😓',
    '🤗',
    '🤔',
    '🤭',
    '🤫',
    '🤥',
    '😶',
    '😐',
    '😑',
    '😬',
    '🙄',
    '😯',
    '😦',
    '😧',
    '😮',
    '😲',
    '🥱',
    '😴',
    '🤤',
    '😪',
    '😵',
    '🤐',
    '🥴',
    '🤢',
    '🤮',
    '🤧',
    '😷',
    '🤒',
    '🤕',
    '🤑',
    '🤠',
    '😈',
    '👿',
    '👹',
    '👺',
    '🤡',
    '💩',
    '👻',
    '💀',
    '☠️',
    '👽',
    '👾',
    '🤖',
    '🎃',
    '😺',
    '😸',
    '😹 ',
    '😻',
    '😼',
    '😽',
    '🙀',
    '😿',
    '😾'
  ];

  const randomIndex = () => {
    return Math.floor(Math.random() * emojiList.length);
  };

  const randomEmoji = () => {
    const index = randomIndex();
    const randomEmoji = emojiList[index];

    //Remove emoji from array so it cannot be picked twice
    emojiList.splice(index, 1);

    return randomEmoji;
  };

  const generatedCards = [];

  for (let i = 0; i < 16; i++) {
    console.log(emojiList.length);
    generatedCards.push(<Card emoji={randomEmoji()} key={i} />);
  }

  console.log(emojiList.length);

  return (
    <div onClick={onClick} id='card-grid'>
      {generatedCards}
    </div>
  );
};

export default CardGrid;
