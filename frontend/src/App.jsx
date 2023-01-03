import { useState } from 'react';
import reactLogo from './assets/img/react.svg';

export default function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className='container'>
        <img src={reactLogo} className='logo' alt='react-logo' />
        <h1 title='title'> Hello, World! </h1>
        <button
          className='btn'
          onClick={() => {
            setCount((prevCount) => (prevCount += 1));
          }}
        >
          Count : {count}
        </button>
      </div>
    </>
  );
}
