import { useState } from 'react';
import {
	AccessCodeData,
	AttackResult,
	EndGameData,
	StartSetupShipsData,
	WSMessageData,
} from './types';
import { errorMessagesRu, uiTextsRu } from './uiTexts/ru';
import { wsClient } from './client/wsClient';
import { AccessCode } from './components/AccessCode';
import { SetUpBoard } from './components/game/SetUpBoard';
import { Waiting } from './components/game/Waiting';
import { Playing } from './components/game/Playing';
import { gameSettings } from './gameSettings';
import { EndGame } from './components/game/EndGame';
import { Entrance } from './components/Entrance';
import { InstantMessage } from './components/game/InstantMessage';

export function Game() {
	const [componentToShow, setComponentToShow] = useState(<></>);
	const [instantMessage, setInstantMessage] = useState('');

	wsClient.onmessage = (event: MessageEvent<string>) => {
		const message = JSON.parse(event.data) as WSMessageData;

		switch (message.type) {
			case 'initial_connection': {
				setComponentToShow(<Entrance />);
				break;
			}
			case 'provide_access_code': {
        setInstantMessage('');
				const data = JSON.parse(message.data) as AccessCodeData;
				setComponentToShow(
						<AccessCode
							code={data.accessCode}
							gameId={data.gameId}
						/>
				);
				break;
			}
			case 'error_no_game':
			case 'error_wrong_code': {
				setInstantMessage(errorMessagesRu.wrongCodeOrNoGame);
				break;
			}
			case 'error_game_full': {
				setInstantMessage(errorMessagesRu.gameFull);
				break;
			}
			case 'start_setup_ships': {
        setInstantMessage('');
				const data = JSON.parse(message.data) as StartSetupShipsData;
				gameSettings.fieldSize = data.fieldSize;
				gameSettings.shipsAvailable = data.shipsAvailable;
				setComponentToShow(
					<SetUpBoard
						gameId={data.gameId}
						connectionId={data.gameId}
					/>
				);
				break;
			}
			case 'another_player_not_started': {
        setInstantMessage('');
				setComponentToShow(<Waiting message={uiTextsRu.waitForAnotherPlayer} />);
				break;
			}
			case 'another_player_started': {
				setInstantMessage(uiTextsRu.anotherPlayerIsWaiting);
				break;
			}
			case 'attack_result': {
				setInstantMessage('');
				const data = JSON.parse(message.data) as AttackResult;
				setComponentToShow(<Playing data={data} />);
				break;
			}
			case 'end_game': {
        setInstantMessage('');
				const data = JSON.parse(message.data) as EndGameData;
				setComponentToShow(<EndGame data={data} />);
				break;
			}
      case 'another_player_disconnected': {
        setInstantMessage(errorMessagesRu.anotherPlayerDisconnected);
        break;
      }
      default: {
        setInstantMessage(errorMessagesRu.defaultError);
        setComponentToShow(<></>);
      }
		}
	};

	wsClient.onclose = () => {
    setInstantMessage('');
		setComponentToShow(
			<Waiting message={errorMessagesRu.connectionLost} />
		);
	};

	return (
		<>
			{instantMessage && <InstantMessage>{instantMessage}</InstantMessage>}
			{componentToShow}
		</>
	);
}
