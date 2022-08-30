import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Mainer from '../components/Mainer'
import Mainest from '../components/Mainest'
import Mainestt from '../components/Mainestt'
import Footer from '../components/Footer'
import Bottom from '../components/Bottom'
export default function Home() {
  return (
    <div className="container">
      <Head />
      <title>Netflix</title>
      <link rel="icon" href="/favicon.ico" />
      <Navbar/>
      <Main/>
      <Mainer/>
      <Mainest/>
      <Mainestt/>
      <Footer/>
      <Bottom/>
    </div>
  )
}