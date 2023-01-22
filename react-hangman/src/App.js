import { useState } from 'react';
import './App.css';
import Hangman from './Components/Hangman';
import Header from './Components/Header';
import Popup from './Components/Popup';
import Word from './Components/Word';
import WrongLetter from './Components/WrongLetter';

const words = ['application', 'programming', 'interface', 'wizard','zebra','developer','animal','JavaScript'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])

  return (
    <div className="App">
     <Header />
     <Hangman wrongLetters={wrongLetters}/>
     <WrongLetter wrongLetters={wrongLetters} />
     <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable}  />
    </div>
  );
}

export default App;
