import React from 'react';


const HIDDEN_SYMBOL = '_';


const Letter = ({currentWord, usedLetter}) => {
    return (

        <div id="word">
            {
                currentWord.map(
                    (letter, key) => {
                        let feedback = "nothidden";
                        if (usedLetter.indexOf(letter) === -1) {
                            feedback = "hidden";
                        }
                        return <span className="theword">
                                {feedback === 'hidden' ? HIDDEN_SYMBOL : letter}
                           </span>
                    }
                )
            }
        </div>
    );
}

export default Letter;