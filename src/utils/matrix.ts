import { randomNumber } from "./random"

export function getRandomMatrix(rows: number, cols: number, min: number, max: number): number[][] {
    return Array.from({ length: rows }, () => 
         Array.from({length: cols}, () => randomNumber(min, max)))
}