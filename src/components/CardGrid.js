import '../styles/CardGrid.css';
import Card from '../components/Card';

const CardGrid = ({ onClick, clickedEmojis }) => {
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

  const generatedCards = [];

  const randomIndex = array => {
    return Math.floor(Math.random() * array.length);
  };

  const randomLength = () => {
    return Math.floor(Math.random() * (15 - 0 + 1) + 0);
  };

  const length = randomLength();

  const randomEmoji = () => {
    let index, randomEmoji;

    if (clickedEmojis.length >= 16 && generatedCards.length === length) {
      // Make sure to include one unclicked emoji in a random position
      const unclickedEmojis = emojiList.filter(
        emoji => clickedEmojis.indexOf(emoji) === -1
      );

      if (unclickedEmojis.length === 0) {
        alert('You clicked all emojis only once!');
      }

      index = randomIndex(unclickedEmojis);
      randomEmoji = unclickedEmojis[index];
    } else {
      index = randomIndex(emojiList);
      randomEmoji = emojiList[index];

      //Remove emoji from array so it cannot be picked twice
      emojiList.splice(index, 1);
    }

    return randomEmoji;
  };

  for (let i = 0; i < 16; i++) {
    generatedCards.push(<Card emoji={randomEmoji()} key={i} />);
  }

  return (
    <div onClick={onClick} id='card-grid'>
      {generatedCards}
    </div>
  );
};

export default CardGrid;
