import React, { Component } from 'react';
import './App.css';
import Letter from "./Letter"
import Board from "./Board";


class App extends Component {
  state = {
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toUpperCase().split(''),
    currentWord: null,
    usedLetter: [],
    error:0,
    win:1,
    stop: false
  }

  componentDidMount() {
    this.selectWord();
  }

  selectWord = () => {
    this.setState({win:0, error:0,stop: false, usedLetter:[]})
    let word = prompt("Quel mot voulez-vous faire deviner ?");
    if(word === null) {
      alert("Merci et au revoir");
    } else {
      this.setState({currentWord: word.toUpperCase().split('')});
    }
  }


  handleClickLetter = (letter) => {
    let error = this.state.error;
    let usedLetter = this.state.usedLetter;
    let win = this.state.win;
    let stop = this.state.stop;
    let currentWord = this.state.currentWord;
    if (this.state.usedLetter.indexOf(letter) === -1) {
         usedLetter = [letter, ...this.state.usedLetter];
    }
    if(this.state.currentWord.indexOf(letter) === -1) {
      error = this.state.error + 1;
      console.log(error);
    } else {
      win = this.state.win + 1;
      console.log(win);
      // Le win n'est pas incrémenté quand j'ai une bonne lettre
      console.log(this.state.currentWord.length);
    }
    if (error === 10) {
      alert("Vous avez perdu, le mot à deviner était " + currentWord);
      stop = true;
    } else if (win === this.state.currentWord.length) {
      alert("Bravo vous avez gagné !!!!")
      stop = true;
    }
    this.setState({usedLetter, error, win, stop});
  }

  render() {
    return (
      <div className="App">
        <h1>Le jeu du pendu</h1>
        {
          (this.state.currentWord !== null) &&
            <Letter
                currentWord={this.state.currentWord}
                usedLetter={this.state.usedLetter}
            />
        }
        <div id="count">Nombres d'erreur :{this.state.error}</div>
        {
          this.state.stop === false ?
              (<Board
              alphabet={this.state.alphabet}
              usedLetter={this.state.usedLetter}
              action={this.handleClickLetter}
          />) : (
                  <div>
                    <button id="reboot" onClick={this.selectWord}>RECOMMENCER</button>
                  </div>
              )
        }
      </div>
    );
  }
}

export default App;

