import '../css/Count.css';

export default function Count({ count, handleClick }) {
  return (
    <button className='CountBtn' onClick={handleClick}>
      Count:<span className='count-number'>{count}</span>
    </button>
  );
}
