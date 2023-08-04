import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
    <div className='Footer'>
        <img className='footerimg' src={require('./image/Rectangle 145.jpg')} alt="" />
    </div>
    <div className='mainadd'>
            <h1 className='headingadd'>Let's talk about your project.</h1>
            <button className='paraadd'> Ask for Price Quotation</button>
        </div>
    </div>

  )
}

export default Footer