import { SyntheticEvent, useState } from 'react';
import { uiTextsRu } from '../../uiTexts/ru';
import { createGame } from '../../client/wsClient';
import { Form } from '../../styled/Form';
import { Button } from '../../styled/Button';
import { Input } from '../../styled/Input';
import { Label } from '../../styled/Label';
import { FormHeading } from '../../styled/FormHeading';

export function CreateGame() {
	const [name, setName] = useState(uiTextsRu.defaultName1);
	function handle(e: SyntheticEvent) {
		e.preventDefault();
		if (name === '') {
			createGame(uiTextsRu.defaultName1);
		} else {
			createGame(name);
		}
	}

	return (
		<Form>
      <FormHeading>{uiTextsRu.createGameHeading}</FormHeading>
      <Label>{uiTextsRu.enterYourName}
        <Input
          className='form-field'
          name='playerName'
          type='text'
          value={name}
          onChange={(e: SyntheticEvent) =>
            setName((e.target as HTMLInputElement).value)
          }
        />
      </Label>
			<Button onClick={(e: SyntheticEvent) => handle(e)}>
				{uiTextsRu.createGame}
			</Button>
		</Form>
	);
}
