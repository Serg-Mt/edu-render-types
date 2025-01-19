import { useEffect, useState } from 'react';
import { ShowData, wrapper } from '../components/payload';

export default function Page() {
  const
    [data, setData] = useState(null),
    [error, setError] = useState(null);
  useEffect(() => void wrapper(setData, setError), []);

  return <>
    <ShowData data={data} error={error} />
  </>
}