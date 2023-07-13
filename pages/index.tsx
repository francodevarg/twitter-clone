import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import Sidebar from '../components/Sidebar'
import {trendingResults} from '../constants'
import {followResults} from '../constants'

const Home = ( ) => {
  return (
    <div className="">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' min-h-screen flex max-w-[1500px] mx-32'>
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


export default Home

