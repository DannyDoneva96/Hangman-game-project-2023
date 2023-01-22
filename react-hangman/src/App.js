import { useState } from 'react';
import './App.css';
import Hangman from './Components/Hangman';
import Header from './Components/Header';
import Word from './Components/Word';
import WrongLetter from './Components/WrongLetter';

function App() {
  const [playable, setPlayable] = useState(true);
  return (
    <div className="App">
     <Header />
     <Hangman />
     <WrongLetter />
     <Word/>

    </div>
  );
}

export default App;
