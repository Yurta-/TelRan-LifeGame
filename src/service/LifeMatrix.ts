import { getRandomMatrix } from "../utils/matrix";

interface Cell {   
    row: number;
    col: number;
}

class LifeMatrix {
    private _matrix: number[][];
    constructor(rows: number, cols: number) {
        this._matrix = getRandomMatrix(rows, cols, 0, 1);
 /*       this._matrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
        this._matrix[1][2] = 1;
        this._matrix[2][2] = 1;
        this._matrix[3][2] = 1;*/
    }

    get matrix() {
        return this._matrix;
    }

    numberOfNeighborsAlive (cellRow: number, cellCol: number): number {
        const neighbors: Cell[] = [{col: cellCol-1, row: cellRow-1}, {col: cellCol, row: cellRow-1}, {col: cellCol+1, row: cellRow-1},
                                   {col: cellCol-1, row: cellRow}, { col: cellCol+1, row: cellRow}, 
                                   {col: cellCol-1, row: cellRow+1}, {col: cellCol, row: cellRow+1}, {col: cellCol+1, row: cellRow+1}];

        let count = 0;
        neighbors.forEach((neighbor) => {
            if (neighbor.row >= 0 && neighbor.row < this._matrix.length &&
                 neighbor.col >=0 && neighbor.col < this._matrix[0].length &&
                this._matrix[neighbor.row][neighbor.col] === 1) {
                    count++;
                }
            });

        return count;
    }

    next = (): number[][] => {
        let newMatrix: number[][] = new Array(this._matrix.length).fill(0).map(() => new Array(this._matrix[0].length).fill(0));
        for (let i = 0; i < this._matrix.length; i++) {
            for (let j = 0; j < this._matrix[0].length; j++) {
                if (this._matrix[i][j] === 1) {
                    if (this.numberOfNeighborsAlive(i, j) < 2 || this.numberOfNeighborsAlive(i, j) > 3) {
                        newMatrix[i][j] = 0;
                    }
                    else {
                        newMatrix[i][j] = 1;
                    }
                } else {
                    if (this.numberOfNeighborsAlive(i, j) === 3) {
                        newMatrix[i][j] = 1;
                    }
                    else {
                        newMatrix[i][j] = 0;
                    }   
                }
            }
        }
        this._matrix = newMatrix;
        return this._matrix;
    }
}

export default LifeMatrix;