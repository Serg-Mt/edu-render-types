import { useState } from 'react'
import { ShowData, wrapper } from '../components/core';

export default function Page() {
  const
    [data, setData] = useState(null),
    [error, setError] = useState(null),
    onClick = () => wrapper(setData, setError);
  return <>
    <button onClick={onClick}>get data</button>;
    <ShowData data={data} error={error} />
  </>
}