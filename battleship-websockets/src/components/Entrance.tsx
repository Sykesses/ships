import { CreateGame } from './forms/CreateGame';
import { EnterAsSecond } from './forms/EnterAsSecond';
import { TwoPanelWrapper } from '../styled/TwoPanelWrapper';
import { HeroHeading } from '../styled/HeroHeading';
import { uiTextsRu } from '../uiTexts/ru';

export function Entrance(){
  return<>
    <HeroHeading>{uiTextsRu.gameHeading}</HeroHeading>
    <TwoPanelWrapper $divider={true}>
      <CreateGame />
      <EnterAsSecond />
    </TwoPanelWrapper>
  </>
}