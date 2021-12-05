import Grid from './Grid';

export enum GameGridElement {
  Hidden,
  Flag,
  Displayed
}

class GameGrid extends Grid {

  private gameGrid: GameGridElement[];
  private nDiscovered: number;

  constructor(size: [number, number], nBombs: number) {
    super(size, nBombs);
    this.gameGrid = this.createGameGrid(size);
    this.nDiscovered = 0;
  }

  /**
   * Creates a game grid of size n, with all the values equal to ``GameGridElement.Hidden``
   * @param n The size of the grid
   */
  private createGameGrid([n, m]: [number, number]): GameGridElement[] {
    const grid = new Array(n * m).fill(GameGridElement.Hidden);
    return grid;
  }

  /**
   * Gets the game value of the square [i, j]
   * @param i The line number
   * @param j The column number
   */
  public getGameValue(i: number, j: number): GameGridElement {
    const [n, m] = this.size;
    if (i < 0 || i >= n || j < 0 || j >= m) {
      throw Error("Square out of grid");
    }
    return this.gameGrid[i * m + j];
  }

  /**
   * Gets the game grid
   */
  public getFlatGameGrid(): GameGridElement[] {
    return this.gameGrid;
  }

  /**
   * Discovers a square of the grid, and continues until all the zero neighbors are discivered too.
   * The functions uses a depth first search in the grid to discover all the neighbors of the zero squares.
   * @param i The line number
   * @param j The column number
   */
  public discover(i: number, j: number) {
    const [n, m] = this.size;

    let x = i;
    let y = j;
    const points: Array<[number, number]> = [];
    const visited: { [i: number]: boolean } = {};
    points.push([x, y]);
    while (points.length > 0) {
      // we need a default value to avoid a typescript error,
      // but as thanks to the while loop we know that the points array is not empty,
      // the default value will never be used, because points.pop() will never return undefined
      [x, y] = points.pop() || [0, 0];
      visited[x * m + y] = true;
      if (this.gameGrid[x * m + y] !== GameGridElement.Displayed) {
        this.nDiscovered += 1;
      }
      this.gameGrid[x * m + y] = GameGridElement.Displayed;
      if (this.isZero(x, y)) {
        this.getNeighbors(x, y).forEach(([xn, yn]) => {
          if (!visited[xn * m + yn]) {
            points.push([xn, yn]);
          }
        });
      }
    }
    const visitedSquares: Array<[number, number]> = [];
    Object.keys(visited).forEach(index => {
      const ind = parseInt(index, 10)
      const col = ind % m;
      const line = Math.floor(ind / m);
      visitedSquares.push([line, col]);
    })
    console.log('Discovered:', this.nDiscovered);
    return {
      discovered: this.nDiscovered,
      visited: visitedSquares
    };
  }

  /**
   * Puts a flag at the square [i, j]
   * @param i The line number
   * @param j The column number
   */
  public putFlag(i: number, j: number): [number, number] {
    const [n, m] = this.size;
    if (i < 0 || i >= n || j < 0 || j >= m) {
      throw Error("Square out of grid");
    }
    if (this.gameGrid[i * m + j] === GameGridElement.Hidden) {
      this.gameGrid[i * m + j] = GameGridElement.Flag;
    } else if (this.gameGrid[i * m + j] === GameGridElement.Flag) {
      this.gameGrid[i * m + j] === GameGridElement.Hidden;
    }
    return [i * m + j, this.gameGrid[i * m + j]];
  }

  /**
   * Resets the grid
   * @param nBombs The number of bombs to put in the grid
   */
  public resetGrid(nBombs: number): void {
    super.resetGrid(nBombs);
    this.nDiscovered = 0;
    this.gameGrid = this.createGameGrid(this.size);
  }

}

export default GameGrid;