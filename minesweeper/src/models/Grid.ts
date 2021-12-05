class Grid {

  protected grid: number[];
  protected size: [number, number];
  protected nBombs: number;

  constructor(size: [number, number], nBombs: number) {
    this.size = size;
    this.nBombs = nBombs;
    this.grid = this.createGrid(size);
    this.initGrid(nBombs);
  }

  /**
   * Creates a matrix of size n, with all the values equal to 0
   * @param n The size of the grid
   */
  private createGrid([n, m]: [number, number]): number[] {
    const grid = new Array(n * m).fill(0);
    return grid;
  }

  /**
   * Puts ``nBombs`` bombs in the grid. The value of the bombs in the grid is ``Infinity``.
   * @param nBombs The number of bombs
   */
  private putBombs(nBombs: number): Array<[number, number]> {
    const bombs: [number, number][] = [];
    const [n, m] = this.size;
    for (let k = 0; k < nBombs; k++) {

      // Choose random positions until there is not altready a bomb.
      // The probability of this to loop for a long time grows with nBombs,
      // but with the number we use it is very low.
      let i = Math.floor(Math.random() * n);
      let j = Math.floor(Math.random() * m);
      while (this.grid[i * m + j] === Infinity) {
        i = Math.floor(Math.random() * n);
        j = Math.floor(Math.random() * m);
      }
      this.grid[i * m + j] = Infinity;
      bombs.push([i, j]);
    }
    return bombs;
  }

  /**
   * Returns an array containing the coordinates of the neighbors of ``[i, j]``
   * @param i The line number
   * @param j The column number
   */
  public getNeighbors(i: number, j: number): Array<[number, number]> {
    const [n, m] = this.size;

    const neighbors: [number, number][] = [];
    if (i > 0) {
      neighbors.push([i-1, j]);
      if (j > 0) neighbors.push([i-1, j-1]);
      if (j < m - 1) neighbors.push([i-1, j+1]); 
    }
    if (i < n - 1) {
      neighbors.push([i+1, j]);
      if (j > 0) neighbors.push([i+1, j-1]);
      if (j < m - 1) neighbors.push([i+1, j+1]);
    }
    if (j > 0) neighbors.push([i, j-1]);
    if (j < m - 1) neighbors.push([i, j+1]);
    return neighbors;
  }

  /**
   * Initializes the grid, by putting ``nBombs`` bombs randomly and computing the values of the squares in the grid.
   * The utility of having given ``Infinity`` value to the bombs, is that 1 + ``Infinity`` = ``Infinity``
   * @param nBombs The number of bombs
   */
  private initGrid(nBombs: number): void {
    const m = this.size[1];
    const bombs = this.putBombs(nBombs);
    bombs.forEach(([i, j]) => {
      const neighbors = this.getNeighbors(i, j);
      neighbors.forEach(([x, y]) => {
        this.grid[x * m + y] += 1
      });
    });
  }
  
  /**
   * Get the value of the square [i, j] of the grid
   * @param i The line number
   * @param j The column number
   */
  public getValue(i: number, j: number): number {
    const [n, m] = this.size;
    if (i < 0 || i >= n || j < 0 || j >= m) {
      throw Error("Square out of grid");
    }
    return this.grid[i * m + j];
  }

  /**
   * Returns ``true`` if the square [i, j] of the grid is zero, ``false`` oftherwise
   * @param i The line number
   * @param j The column number
   */
  public isZero(i: number, j: number): boolean {
    const [n, m] = this.size;
    if (i < 0 || i >= n || j < 0 || j >= m) {
      throw Error("Square out of grid");
    }
    return this.grid[i * m + j] === 0;
  }

  /**
   * Returns ``true`` if the square [i, j] of the grid is a bomb, ``false`` oftherwise
   * @param i The line number
   * @param j The column number
   */
  public isBomb(i: number, j: number): boolean {
    const [n, m] = this.size;
    if (i < 0 || i >= n || j < 0 || j >= m) {
      throw Error("Square out of grid");
    }
    return this.grid[i * m + j] === Infinity;
  }

  /**
   * Returns the grid
   */
  public getFlatGrid(): number[] {
    return this.grid;
  }

  /**
   * Resets the grid
   * @param nBombs The number of bombs
   */
  public resetGrid(nBombs: number): void {
    this.grid = this.createGrid(this.size);
    this.initGrid(nBombs);
  }

}

export default Grid;
