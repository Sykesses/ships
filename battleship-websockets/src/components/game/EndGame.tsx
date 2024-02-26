import { useEffect, useState } from 'react';
import { Board } from '../../styled/Board';
import { BoardCaptain } from '../../styled/BoardCaptain';
import { GameWrapper } from '../../styled/GameWrapper';
import { Instructions } from '../../styled/Instructions';
import { TwoPanelWrapper } from '../../styled/TwoPanelWrapper';
import { EndGameData } from '../../types';
import { uiTextsRu } from '../../uiTexts/ru';
import { playerBoard } from '../../utils/playerBoard';
import Confetti from 'react-confetti';

export function EndGame({data}: {data: EndGameData}){
  const myBoard = playerBoard(data.myShipCells, data.myWoundedCells);
  const opponentBoard = playerBoard(data.opponentsShipCells, data.opponentsWoundedCells);

  const [confettiQuantity, setConfettiQuantity] = useState(200);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(document.documentElement.scrollHeight);
    setWidth(document.documentElement.scrollWidth - 20);
    const confettiTimer = setTimeout(() => setConfettiQuantity(0), 3000);
    return () => {clearTimeout(confettiTimer)};
  }, [])

  return <GameWrapper>
      {data.isWinner && <Confetti numberOfPieces={confettiQuantity} height={height} width={width}/>}
      <Instructions> {data.isWinner ? uiTextsRu.congrats : `${uiTextsRu.endGame} ${data.winnerName}`}</Instructions>
      <TwoPanelWrapper $divider={false}>
        <div>
          <BoardCaptain>{uiTextsRu.myShips}</BoardCaptain>
          <Board $highlight={false}>
              {myBoard}
          </Board>
        </div>

        <div>
          <BoardCaptain>{uiTextsRu.opponentShips}</BoardCaptain>
          <Board $highlight={false}>
              {opponentBoard}
          </Board>
        </div>
      </TwoPanelWrapper>
    </GameWrapper>
}
