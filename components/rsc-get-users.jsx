import { ClientServerIndicator } from './client-server-indicaror';
import { Counter } from './counter';
import { User } from './user';


// клиентский внутри серверного
export async function RSC_GetUser() {
  console.log('RSC');
  const
    response = await fetch('https://jsonplaceholder.typicode.com/users'),
    users = await response.json();
  return <fieldset>
    <legend>RSC_GetUser<ClientServerIndicator /> </legend>
    {globalThis.process.versions.node}
    <ol>
      {users?.map?.(u => <li key={u.id}>
        <Counter start={u.id} />
        <User user={u} />
      </li>)}
    </ol>

  </fieldset>
}