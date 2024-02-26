import { ShipAvailable } from '../types';

export function isValidMatrix(markedCells: string[], shipsAvailable: ShipAvailable[], fieldSize: number){
  let maxSize = 0;
  for(const item of shipsAvailable){
    maxSize += item.type * item.quantity;
  }

  if(markedCells.length !== maxSize) return false;

  const dI = [0, 0, 1, -1];
  const dJ = [1, -1, 0, 0];

  const matrix: number[][] = [];

  for(let i = 0; i < fieldSize; i++) {
    const row = [];
    for(let j = 0; j < fieldSize; j++) {
      if(markedCells.includes(`${i},${j}`)){
        row.push(1)
      } else {
        row.push(0)
      }
    }
    matrix.push(row)
  }

  const typeToQuantityMap = new Map<number, number>();
  for(const item of shipsAvailable){
    typeToQuantityMap.set(item.type, item.quantity);
  }

  for(let i = 0; i < matrix.length; i++) {
   for(let j = 0; j < matrix.length; j++) {
     if(matrix[i][j] === 1){
        matrix[i][j] = 2;
        const currentSize = dfs(i, j, 1);
        if(!typeToQuantityMap.has(currentSize)){
          return false;
        } else {
          typeToQuantityMap.set(currentSize, Number(typeToQuantityMap.get(currentSize)) - 1)
        }

      }
    }
  }

  for(const value of typeToQuantityMap.values()){
    if(value !== 0) {
      return false;
    }
  }
  return true;


  function dfs(i: number, j: number, size: number){
    for(let d = 0; d < dI.length; d++){
      if(matrix[i + dI[d]] && matrix[i + dI[d]][j + dJ[d]] === 1){
        matrix[i + dI[d]][j + dJ[d]] = 2;
        size += dfs(i + dI[d], j + dJ[d], 1);
      }
    }
    return size;
  }
}