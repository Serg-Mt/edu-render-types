'use client';

import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);
  return <button onClick={() => setCounter(x => +x + 1)}>
    {counter}
  </button>
}