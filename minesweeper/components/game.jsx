import React from 'react';
import Board from './board';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      board: new Board()
    }
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    const size = [16, 16];
    return (
      <div>
        <h1>test</h1>
        <Board size={size}/>
      </div>
    )
  }
}

export default Game;
