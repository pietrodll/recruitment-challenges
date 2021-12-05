import { useState, useEffect, useReducer } from 'react';

// Models
import GameGrid, { GameGridElement } from '../../models/GameGrid';

let game = new GameGrid([1, 1], 1);

interface GridReducerAction {
  reset?: GameGridElement[];
  flag?: [number, number];
  win?: boolean;
}

const reducer: React.Reducer<GameGridElement[], GridReducerAction> = (prevGrid, action) => {
  if (action.reset) {
    return action.reset;
  }
  if (action.flag) {
    const grid = [...prevGrid];
    grid[action.flag[0]] = action.flag[1];
    return grid;
  }
  if (action.win) {
    return new Array(prevGrid.length).fill(GameGridElement.Displayed);
  }
  return prevGrid;
}

const useGame = (size: [number, number], nBombs: number) => {

  useEffect(() => {
    game = new GameGrid(size, nBombs);
    modifGameGrid({ reset: game.getFlatGameGrid() });
    setToDiscover(size[0] * size[1] - nBombs);
  }, [size, nBombs]);

  const flatGrid = game.getFlatGrid();
  const [flatGameGrid, modifGameGrid] = useReducer(reducer, []);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [toDiscover, setToDiscover] = useState(Infinity);

  const handleSquarePress = (i: number, j: number) => {
    if (game.isBomb(i, j)) {
      setLose(true);
    }
    const { discovered } = game.discover(i, j);
    setToDiscover(size[0] * size[1] - nBombs - discovered)
    modifGameGrid({ reset: game.getFlatGameGrid() });
    if (toDiscover <= nBombs) {
      modifGameGrid({ win: true });
      setWin(true);
    }
  };

  const handleSquareLongPress = (i: number, j: number) => {
    const flag = game.putFlag(i, j);
    modifGameGrid({ flag });
  };

  const handleRestart = () => {
    game = new GameGrid(size, nBombs);
    modifGameGrid({ reset: game.getFlatGameGrid() });
    setToDiscover(size[0] * size[1] - nBombs);
    setWin(false);
    setLose(false);
  };

  return { flatGrid, flatGameGrid, win, lose, handleSquareLongPress, handleSquarePress, handleRestart, toDiscover };
};

export default useGame;
