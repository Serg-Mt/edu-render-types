import { useRouter } from 'next/router'

export default function Page({ id }) {
  const
    router = useRouter(),
    slug = router.query.slug;
  return <>
    <h2>page/dyn/a/[slug].jsx</h2>
    slug = {slug}:{typeof slug}<br />
    id = {id}
  </>
}

export async function getStaticProps(context) {
  // console.log('getStaticProps context=', context);
  return { props: { id: 111000 + context.params.slug } }
}

export async function getStaticPaths(params) {
  return {
    paths: [
      { params: { slug: '111' } },
      { params: { slug: '777' } },
    ],
    fallback: true
  }
}