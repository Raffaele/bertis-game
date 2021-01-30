import {useState} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  const [number, setNum] = useState(1);
  function reset() {
    setNum(1);
  }
  function increment() {
    setNum(number+1);
  }
  return (
    <div className="App">
      <Header></Header>
      <Main toShow={number}></Main>
      <Footer onReset={reset} onIncrement={increment}></Footer>
    </div>
  );
}

export default App;
