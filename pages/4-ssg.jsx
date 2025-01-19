import { fetcher, ShowData } from '../components/payload'

export default function SSGPage({ data }) {
  return <>
    <ShowData data={data} />
  </>
}

export async function getStaticProps() {
  const data = await fetcher();

  return { props: { data } }
}