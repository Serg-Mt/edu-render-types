import { fetcher, ShowData } from '../components/core'

export default function SSRPage({ data }) {
  return <>
    <ShowData data={data} />
  </>
}

export async function getServerSideProps() {
  const data = await fetcher();

  return { props: { data } }
}