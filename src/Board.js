import React, {Component} from 'react';


class Board extends Component {

    render() {
        return (
            <div id="board">
                {
                    this.props.alphabet.map(
                        (letter, key) => {
                            return <button
                                key={"board_" + key}
                                onClick={() => this.props.action(letter)}
                                className={this.props.usedLetter.indexOf(letter) !== -1 ? "pressed" : ""}
                            >{letter}</button>
                        }
                    )
                }
            </div>
        )
    }
}


export default Board;