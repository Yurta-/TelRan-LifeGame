import { getRandomMatrix } from "../utils/matrix";

interface Cell {   
    row: number;
    col: number;
}

class LifeMatrix {
    private _matrix: number[][];
    constructor(rows: number, cols: number) {
        this._matrix = getRandomMatrix(rows, cols, 0, 1);
    }

    get matrix() {
        return this._matrix;
    }

    numberOfNeighborsAlive (cellRow: number, cellCol: number): number {
        const neighbors: Cell[] = [{col: cellCol-1, row: cellRow-1}, 
                                   {col: cellCol,   row: cellRow-1}, 
                                   {col: cellCol+1, row: cellRow-1},
                                   {col: cellCol-1, row: cellRow}, 
                                   {col: cellCol+1, row: cellRow}, 
                                   {col: cellCol-1, row: cellRow+1}, 
                                   {col: cellCol,   row: cellRow+1}, 
                                   {col: cellCol+1, row: cellRow+1}];

        let count = neighbors.reduce((sum, n) => {
            if (n.row >=0 && n.row < this._matrix.length && n.col >=0 && n.col < this._matrix[0].length) 
                sum = sum + this._matrix[n.row][n.col];
            return sum;
        }, 0)

        return count;
    }

    next = (): number[][] => {
        let newMatrix: number[][] = new Array(this._matrix.length).fill(0).map(() => new Array(this._matrix[0].length).fill(0));

        this._matrix.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                const liveNeighbors = this.numberOfNeighborsAlive(rowIndex, cellIndex);
                newMatrix[rowIndex][cellIndex] = this._matrix[rowIndex][cellIndex];
                if (liveNeighbors === 3) {
                    newMatrix[rowIndex][cellIndex] = 1;
                } else if (liveNeighbors < 2 || liveNeighbors > 3) {
                    newMatrix[rowIndex][cellIndex] = 0;
                } 
            })
        })

        this._matrix = newMatrix;
        return this._matrix;
    }
}

export default LifeMatrix;