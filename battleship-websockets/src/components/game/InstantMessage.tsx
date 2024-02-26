import { useState } from 'react';
import { NotificationWrapper } from '../../styled/NotificationWrapper';

export function InstantMessage({children}: {children: string}) {
  const [hide, setHide] = useState(false);

  return <NotificationWrapper onClick={() => setHide(true)} $hide={hide}>
      {children}
  </NotificationWrapper>
}