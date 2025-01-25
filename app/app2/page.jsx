import { Counter } from '../../components/counter';
import { RSC_GetUser } from '../../components/rsc-get-users';

export default function Page() {
  console.log('/app/app2/page.jsx');
  return <>
    <h2>app/app2/page.js</h2>
    <RSC_GetUser >
      <Counter />
    </RSC_GetUser>
  </>
}