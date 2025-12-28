import React from 'react'
import Navbar from '../Navbar'
import Container from './Container'
import Strip from '../Strip'
import Slider from '../Slider'
import Works from '../Works'
import Digital from '../../Digital'
import Marquee from '../../Marquee'
import Footer from '../Footer'


const Home = () => {
  return (
    <div className='bg-[#000000] w-full'>
      <Navbar />
      <Container />
      <Strip />
      <Slider />
      <Works />
      <Digital />
      <Marquee />
      <Footer />
    </div>
  )
}

export default Home
