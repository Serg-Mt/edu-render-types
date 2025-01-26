'use client';

import { useState } from 'react';
import { ClientServerIndicator } from './client-server-indicaror';

export function Counter({ start = 0, children }) {
  const [counter, setCounter] = useState(start);
  return <><button onClick={() => setCounter(x => +x + 1)}>
    {counter}
    <ClientServerIndicator />
    <fieldset>
      {children}
    </fieldset>
  </button>

  </>
}