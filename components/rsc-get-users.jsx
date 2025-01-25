import { User } from './user';

export async function RSC_GetUser({ children }) {
  console.log('RSC');
  const
    response = await fetch('https://jsonplaceholder.typicode.com/users'),
    users = await response.json();
  return <fieldset>
    <legend>RSC_GetUser</legend>
    <ol>
      {users?.map?.(u => <li key={u.id}>
        <User user={u} />
      </li>)}
    </ol>
    {children}
  </fieldset>
}