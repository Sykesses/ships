import { SyntheticEvent, useState } from 'react';
import { isValidMatrix } from '../../utils/isValidMatrix';
import { uiTextsRu } from '../../uiTexts/ru';
import { startGame } from '../../client/wsClient';
import { gameSettings } from '../../gameSettings';
import { GameWrapper } from '../../styled/GameWrapper';
import { Instructions } from '../../styled/Instructions';
import { TwoPanelWrapper } from '../../styled/TwoPanelWrapper';
import { Button } from '../../styled/Button';
import { Board } from '../../styled/Board';
import { Cell } from '../../styled/Cell';
import { CELL_STATES } from '../../constants';
import { ShipInfo } from './ShipInfo';
import { Stack } from '../../styled/List';

export function SetUpBoard({gameId, connectionId}: {gameId: number, connectionId: number}) {
  gameSettings.gameId = gameId;

  const [markedCells, setMarkedCells] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(false);

  const board = [];

  for(let i = 0; i < gameSettings.fieldSize; i++) {
    for(let j = 0; j < gameSettings.fieldSize; j++) {
      const isMarked = markedCells.includes(`${i},${j}`)
      board.push(
        <Cell
          $state={isMarked ? CELL_STATES.CHECK : CELL_STATES.UNCHECK}
          $isActive={true}
          key={`${i},${j}`}
          onClick={() => mark(i, j, isMarked)}
        >
        </Cell>
      )
    }
  }

  function validate(newMarkedCells: string[]) {
    if(isValidMatrix(newMarkedCells, gameSettings.shipsAvailable, gameSettings.fieldSize)){
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  function mark(i: number, j: number, isMarked: boolean){
    if(!isMarked){
      const newMarkedCells = [...markedCells, `${i},${j}`];
      validate(newMarkedCells);
      setMarkedCells([...newMarkedCells])
    } else {
      const newMarkedCells = markedCells.filter((item) => item !== `${i},${j}`);
      validate(newMarkedCells);
      setMarkedCells([...newMarkedCells])
    }
  }

  function handle(e: SyntheticEvent){
    e.preventDefault();
    startGame(markedCells, gameId, connectionId);
  }

  return <GameWrapper>
    <Instructions>{isValid ? uiTextsRu.validShips : uiTextsRu.tip}</Instructions>
    <TwoPanelWrapper $divider={false}>
      <Stack>{gameSettings.shipsAvailable.map((ship, i) => <ShipInfo key={i} ship={ship}/>)}</Stack>

      <Board $highlight={true}>
        {board}
      </Board>
    </TwoPanelWrapper>

      <Button disabled={!isValid} onClick={(e: SyntheticEvent) => handle(e)}>{uiTextsRu.startGame}</Button>
  </GameWrapper>
}