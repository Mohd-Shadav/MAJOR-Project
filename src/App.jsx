import React from 'react'
import Header from './components/Header'
import MostViewed from './components/MostViewed'
import EasiestAreaHome from './components/EasiestAreaHome'
import StepsArea from './components/StepsArea'
import AgentsArea from './components/AgentsArea'
import BottomImg from './components/BottomImg'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header/>
      <MostViewed/>
      <EasiestAreaHome/>
      <StepsArea/>
      <AgentsArea/>
      <BottomImg/>
      <Footer/>
    </div>
  )
}

export default App