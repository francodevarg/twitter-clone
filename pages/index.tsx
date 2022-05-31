import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import Sidebar from '../components/Sidebar'

const Home = ({ trendingResults, followResults }) => {
  return (
    <div className="">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mx-32'>
        <Sidebar/>
        <Feed/>
        {/** Feed */}
        {/** Widgets */}
        <Widgets           
          trendingResults={trendingResults}
          followResults={followResults}  />
      </main>
    </div>
  )
}
export async function getServerSideProps() {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );

  return {
    props: {
      trendingResults,
      followResults,
    },
  };
}

export default Home

