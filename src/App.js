import React from 'react'
import Categori from './components/categori/Categori'
import Feature from './components/feature/Feature'
import Navbaro from './components/navbar/Navbaro'
import Sunrise from './components/sunrise/Sunrise'
import Brand from './components/brand/Brand'
import Area from './components/area/Area'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbaro/>
      <Sunrise/>
      <Brand/>
      <Feature/>
      <Categori/>
      <Feature/>
      <Area/>
      <Footer/>
    </div>
  )
}

export default App