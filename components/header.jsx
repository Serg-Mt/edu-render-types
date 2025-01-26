'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const
  pages = [
    { href: '/', title: 'home' },
    { href: '/app2', title: 'app2' },
    { href: '/todo', title: 'todo' },
    { href: '/1-csr-onclick', title: 'CSR onclick' },
    { href: '/2-csr-onmount', title: 'CSR onMount' },
    { href: '/3-ssr', title: 'SSR' },
    { href: '/4-ssg', title: 'SSG' },
    { href: '/dyn/', title: 'dynamic (page)' }
  ];

export default function Header() {
  const pathname = usePathname();
  console.log(pathname)
  return <header>
    <nav>
      <ul>
        {pages.map(({ href, title }) =>
          <li key={href} className={pathname === href ? 'active' : ''}>
            <Link href={href}>{title} </Link>
          </li>)}
      </ul>
    </nav>
  </header>
}