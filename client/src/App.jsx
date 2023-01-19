import { useEffect, useState } from 'react';
import Home from './components/Home';
import WebFont from 'webfontloader';

export default function App() {
  const [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito'],
      },
    });
  }, []);

  return (
    <>
      <Home count={count} increaseCount={increaseCount} />
    </>
  );
}
