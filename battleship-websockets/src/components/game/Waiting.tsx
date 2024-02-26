import { FullScreenMessage } from '../../styled/FullScreenMessage';
import { Instructions } from '../../styled/Instructions';
import { Loader } from '../../styled/Loader';

export function Waiting({message}: {message: string}){
  return <FullScreenMessage>
      <Loader $isInline={false}/>
      <Instructions>{message}</Instructions>
    </FullScreenMessage>
}