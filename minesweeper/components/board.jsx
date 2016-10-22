import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  componentDidMount() {
    this.setState({tiles: this.generateTiles(this.props.size)})
  }
  constructor(props) {
    super(props);
    this.state = {
      tiles: [[]]
    }
  }

  generateTiles(size = [16, 16]) {
    let grid = [];

    for (let i = 0; i < size[0]; i++) {
      let row = [];
      for (let j = 0; j < size[1]; j++) {
        row.push(new Tile());
      }
      grid.push(row);
    }

    return grid;
  }

  render() {
    return (
      <div>
        <h1>Board</h1>
        <ul>
          {
            this.state.tiles.map((row, i) => {
              row.map((tile, j) => {
                <Tile />
              })
            })
          }
        </ul>
      </div>
    )
  }
}

export default Board;
