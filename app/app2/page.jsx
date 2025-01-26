import { RSC_GetUser } from '../../components/rsc-get-users';
import { Counter } from '../../components/counter';
import { RSC_Example } from '../../components/rsc-example';

export default function Page() {
  console.log('/app/app2/page.jsx');
  return <>
    <h2>app/app2/page.js</h2>
    <h3>Серверный внутри клиентского</h3>
    <Counter>
      <RSC_Example/>
    </Counter>
    <hr />
    <RSC_GetUser />
  </>
}