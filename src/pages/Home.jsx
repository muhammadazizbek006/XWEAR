import React from 'react'
import Hero from   '../components/home/Hero'
import OyoqKiyimlar from '../components/home/OyoqKiyimlar'
import Turotial from '../components/home/Turotial'
import Kiyimlar from '../components/home/Kiyimlar'
import Acsesuar from '../components/home/Acsesuar'
import Raschitat from '../components/home/Raschitat'
import NashBlock from '../components/home/NashBlock'
import Sharxlar from '../components/home/Sharxlar'
const Home = () => {
  return (
    <>
      <Hero/>
      <OyoqKiyimlar/>
      {/* <Turotial/> */}
      <Kiyimlar/>
      <Acsesuar/>
      <Sharxlar/>
      <Raschitat/>
      <NashBlock/>
    </>
  )
}

export default Home