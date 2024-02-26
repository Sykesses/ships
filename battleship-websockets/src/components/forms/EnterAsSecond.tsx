import { SyntheticEvent, useState } from 'react';
import { uiTextsRu } from '../../uiTexts/ru';
import { joinGame } from '../../client/wsClient';
import { Form } from '../../styled/Form';
import { Input } from '../../styled/Input';
import { Button } from '../../styled/Button';
import { FormHeading } from '../../styled/FormHeading';
import { Label } from '../../styled/Label';

export function EnterAsSecond() {
	const [name, setName] = useState(uiTextsRu.defaultName2);
	const [code, setCode] = useState('');

	function handle(e: SyntheticEvent) {
		e.preventDefault();
		if (name === '') {
			joinGame(uiTextsRu.defaultName2, code);
		} else {
			joinGame(name, code);
		}
	}

	return (
		<Form>
      <FormHeading>{uiTextsRu.joinGameHeading}</FormHeading>
      <Label>{uiTextsRu.enterYourName}
        <Input
          type='text'
          name='playerName'
          value={name}
          onChange={(e: SyntheticEvent) => setName((e.target as HTMLInputElement).value)}
        />
      </Label>
      <Label>{uiTextsRu.enterAccessCode}
        <Input
          type='text'
          name='playerCode'
          value={code}
          onChange={(e: SyntheticEvent) => setCode((e.target as HTMLInputElement).value)}
        />
      </Label>
			<Button onClick={(e: SyntheticEvent) => handle(e)}>{uiTextsRu.enterGame}</Button>
		</Form>
	);
}
