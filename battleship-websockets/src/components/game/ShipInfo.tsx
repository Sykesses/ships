import { CELL_STATES } from '../../constants';
import { Cell } from '../../styled/Cell';
import { ShipInfoWrapper } from '../../styled/ShipInfoWrapper';
import { ShipAvailable } from '../../types';

export function ShipInfo({ship} : {ship: ShipAvailable}){
  const cells = [];
  for(let i = 0; i < ship.type; i++){
    cells.push(<Cell key={i} $state={CELL_STATES.UNCHECK} $isActive={false}/>)
  }

  return <ShipInfoWrapper>
    <p>{ship.quantity}</p>
    {cells}
  </ShipInfoWrapper>

}