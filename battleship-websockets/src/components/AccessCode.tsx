import { SyntheticEvent } from 'react';
import { setUpShips } from '../client/wsClient';
import { uiTextsRu } from '../uiTexts/ru';
import { FullScreenMessage } from '../styled/FullScreenMessage';
import { Button } from '../styled/Button';
import { Code } from '../styled/Code';
import { Instructions } from '../styled/Instructions';

export function AccessCode({code, gameId}: {code: string, gameId: number}) {
  function handle(e: SyntheticEvent){
    e.preventDefault();
    setUpShips(gameId);
  }
  return <FullScreenMessage>
      <Instructions>{uiTextsRu.sendCode}</Instructions>
      <Code>{code}</Code>
      <Button onClick={(e: SyntheticEvent) => handle(e)}>{uiTextsRu.ready}</Button>
    </FullScreenMessage>
}