import { revalidatePath } from 'next/cache'
import { ClientServerIndicator } from '../client-server-indicaror';


async function addComment(formData) {
  'use server' // server-side functions 
  console.log('addComment formData=', formData);
  const body = formData.get('inpname');
  await fetch('http://localhost:3333/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ body })
  });
  revalidatePath('todo'); // не надо так делать
  // пример исключительно для демонстрации возможностей серверных функций
}

async function del(formData) {
  'use server';// server-side functions 
  const id = formData.get('id');
  await fetch('http://localhost:3333/comments/' + id, {
    method: 'DELETE'
  });
  revalidatePath('todo'); // не надо так делать
}





export async function RSC_Comments() {
  console.log('RSC');
  const
    response = await fetch('http://localhost:3333/comments'),
    comments = await response.json();
  if (Math.random() < .3) throw new Error('++++');
  return <fieldset>
    <legend>RSC_Comments <ClientServerIndicator /></legend>
    <AddForm />
    <ol>
      {comments.map(c =>
        <li key={c.id}>
          <form action={del}>
            {c.body} ({c.id})
            <input type="hidden" name="id" value={c.id} />
            <button type="submit">❌</button>
          </form>
        </li>

      )}
    </ol>

  </fieldset>
}

function AddForm() {
  return <form action={addComment}>
    <input type="text" name="inpname" />
    <ClientServerIndicator />
    <input type="submit" />
  </form>
}