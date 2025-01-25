import { useRouter } from 'next/router'

export default function Page() {
  const
    router = useRouter(),
    slug = router.query.slug;
  console.log('page/dyn/b/[...slug].jsx', slug);
  return <>
    <h2>page/dyn/b/[...slug].jsx</h2>
    slug = [{slug?.join(',')}]:{slug?.constructor?.name}
  </>
}