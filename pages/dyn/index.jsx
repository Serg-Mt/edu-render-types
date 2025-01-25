import Link from 'next/link';

const
  links = [
    '/dyn/a', '/dyn/a/111', '/dyn/a/222', '/dyn/a/333/444',
    '/dyn/b', '/dyn/b/111', '/dyn/b/222', '/dyn/b/333/444',
    '/dyn/c', '/dyn/c/111', '/dyn/c/222', '/dyn/c/333/444',
  ];


export default function Page() {
  return <>
    <h2>page/dyn/index.jsx</h2>
    <ul>
      {links.map(l => <li key="l">
        <Link href={l}>{l}</Link>
      </li>)}
    </ul>
  </>
}