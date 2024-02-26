import { CELL_STATES } from '../constants';
import { gameSettings } from '../gameSettings';
import { Cell } from '../styled/Cell';

export function playerBoard(ships: string[], wounded: string[]){
  const board = [];

  for(let i = 0; i < gameSettings.fieldSize; i++) {
    for(let j = 0; j < gameSettings.fieldSize; j++) {
      const isMarked = ships.includes(`${i},${j}`);
      const isWounded = wounded.includes(`${i},${j}`);
      board.push(
        <Cell
          $state={isWounded ? CELL_STATES.WOUNDED : (isMarked ? CELL_STATES.CHECK : CELL_STATES.UNCHECK)}
          $isActive={false}
          key={`${i},${j}`}
          >
        </Cell>
      )
    }
  }

  return board;
}