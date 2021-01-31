import { useState, useRef } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import numbers from './numbers.json';

import sound from './sounds/Bell2.wav';

function App() {
  const [number, setNum] = useState(1);
  const refContainer = useRef();
  function reset() {
    setNum(1);
  }
  function increment() {
    if (number >= numbers.length) {
      return;
    }
    refContainer.current.play();
    setNum(number+1);
  }
  return (
    <div className="App">
      <Header></Header>
      <Main toShow={number}></Main>
      <Footer onReset={reset} onIncrement={increment}></Footer>
      <audio id="pippo" crossOrigin="anonymous" ref={refContainer}>
        <source src={sound} />
      </audio>
    </div>
  );
}

export default App;
