import next from 'next';

const
  url = new URL(`https://jsonplaceholder.typicode.com/users`);


function Data({ data }) {
  const { json, date, random } = data;
  return <fieldset>
    date:{date} <br />
    random:{random} <br />
    <ol>
      {json.map(user => <li key={user.id}>
        {user.name}
      </li>)}
    </ol>
  </fieldset>
}

export function ShowData({ data, error }) {
  const isHydrating = undefined;
  console.debug('render ShowData', isHydrating);
  if (error) return <div className='error'>error:{String(error)}</div>
  if (data) return <Data data={data} />
  return <div className='spinner'>loading...</div>
}

export async function fetcher() {
  url.search = Math.random(); // для отключения кеширования
  const
    response = await fetch(url);
  if (!response.ok)
    throw new Error('response' + response.status);
  const
    random = Math.random(),
    json = await response.json(),
    date = (new Date).toLocaleTimeString();
  console.debug('fetcher', date);
  return { json, date, random };
}

export async function wrapper(setData, setError) {
  try {
    const
      data = await fetcher();
    setData(data);
    setError(null);
  } catch (error) {
    setData(null);
    setError(error);
  }
}
