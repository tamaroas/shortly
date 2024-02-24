import React from 'react'
import Navbar from '../../components/header/navbar'
import Welcome from '../../components/welcome'
import Statistics from '../../components/statistics'
import Boost from '../../components/boost'
import Footer from '../../components/footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Welcome />
        <Boost />
        <Footer />
    </div>
  )
}

export default Home