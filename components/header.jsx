import Link from 'next/link';

const
  pages = [
    { href: '/', title: 'home' },
    { href: '1-csr-onclick', title: 'CSR onclick' },
    { href: '2-csr-onmount', title: 'CSR onMount' },
    { href: '3-ssr', title: 'SSR' },
    { href: '4-ssg', title: 'SSG' }
  ];

export default function Header() {
  return <header>
    <nav>
      <ul>
        {pages.map(({ href, title }) =>
          <li key={href}>
            <Link href={href}>{title} </Link>
          </li>)}
      </ul>
    </nav>
  </header>
}