import { sendAttack } from '../../client/wsClient';
import { CELL_STATES } from '../../constants';
import { gameSettings } from '../../gameSettings';
import { Bell } from '../../styled/Bell';
import { Board } from '../../styled/Board';
import { BoardCaptain } from '../../styled/BoardCaptain';
import { Cell } from '../../styled/Cell';
import { GameWrapper } from '../../styled/GameWrapper';
import { Instructions } from '../../styled/Instructions';
import { Loader } from '../../styled/Loader';
import { TwoPanelWrapper } from '../../styled/TwoPanelWrapper';
import { AttackResult } from '../../types';
import { uiTextsRu } from '../../uiTexts/ru';
import { playerBoard } from '../../utils/playerBoard';

export function Playing({data}: {data: AttackResult}){

  const myBoard = playerBoard(data.myShipCells, data.myWoundedCells)

  const opponentBoard = [];

  for(let i = 0; i < gameSettings.fieldSize; i++) {
    for(let j = 0; j < gameSettings.fieldSize; j++) {
      const isMarked = data.opponentsEmptyCells.includes(`${i},${j}`);
      const isWounded = data.opponentsWoundedCells.includes(`${i},${j}`);
      opponentBoard.push(
        <Cell
          $state={isWounded ? CELL_STATES.WOUNDED : (isMarked ? CELL_STATES.UNCHECK : CELL_STATES.UNKNOWN)}
          $isActive={data.myTurn}
          key={`${i},${j}`}
          onClick={() => data.myTurn && attack(i, j)}
          >
        </Cell>
      )
    }
  }

  function attack(i: number, j: number){
    sendAttack(`${i},${j}`, gameSettings.gameId)
  }

  const instructions = data.myTurn ? <><Bell/> {uiTextsRu.yourTurn}</> : <><Loader $isInline={true}/> {uiTextsRu.opponentTurn}</>;

  return <GameWrapper>
      <Instructions>
        {instructions}
      </Instructions>
      <TwoPanelWrapper $divider={false}>
        <div>
          <BoardCaptain>{uiTextsRu.myShips}</BoardCaptain>
          <Board $highlight={false}>
            {myBoard}
          </Board>
        </div>

        <div>
          <BoardCaptain>{uiTextsRu.opponentShips}</BoardCaptain>
          <Board $highlight={data.myTurn}>
            {opponentBoard}
          </Board>
        </div>
      </TwoPanelWrapper>

    </GameWrapper>
}