import React from 'react'
import './Brand.css'

function Brand() {
  return (
    <div className='main'>
      <div className='top'>
        <h1 className='heading'>Browse a Product by Brand</h1><br/>
        <p className='para'>We believe in the power of brands to create credibility. That's why we partner with <br/> the best to bring you top-quality products. Trust us to deliver excellence, every time.<br/> Shop Now with confidence, knowing you're getting the best.</p>
      </div> 
      <div className='column'>
        <div className='row1'>
        <img className='rowpic1' src={require('./image/technolight logo.jpg')} alt="" />
        <img className='rowpic' src={require('./image/euchips logo.jpg')} alt="" />
        <img className='rowpic' src={require('./image/ltech logo.jpg')} alt="" />
        <img className='rowpic' src={require('./image/tridonic logo.jpg')} alt="" />
        </div>
        <div className='row2'>
        <img className='rowpic1' src={require('./image/technolight logo.jpg')} alt="" />
        <img className='rowpic' src={require('./image/euchips logo.jpg')} alt="" />
        <img className='rowpic' src={require('./image/ltech logo.jpg')} alt="" />
        <img className='rowpic' src={require('./image/tridonic logo.jpg')} alt="" />
        </div>
      </div>
      <div className='mainadd'>
        <h1 className='headingadd'>Let's talk about your project.</h1>
        <button className='paraadd'> Ask for Price Quotation</button>
    </div>  
    </div>
  )
}

export default Brand