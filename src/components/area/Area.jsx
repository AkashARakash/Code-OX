import React from 'react'
import './Area.css'

function Area() {
  return (
    <div className='Area'>
        <div>
        <h1 className='areahead'>Application Areas </h1>
            <p className='areapara'>Light up any space with our versatile lighting fixtures. From the living room to the <br /> bedroom and beyond, our fixtures are perfect for any area of your home. <br />
Shop now and discover the perfect lighting solution for every room!</p>
        </div>
        <div className='topareabtn'>
            <button className='areabtn'>Kitchen</button>
            <button className='areabtn'>Bedroom</button>
            <button className='areabtn'>Hall</button>
            <button className='areablack '>Office</button>
            <button className='areabtn'>Street</button>
            <button className='areabtn'>Cabinets</button>
            <button className='areabtn'>Rocks</button>
            <button className='areabtn'>Garden</button>
        </div>
        <div className='topareabtn'>
            <button className='areabtnlast'>Pathway</button>
            <button className='areabtnlast'>Parking Area</button>
            <button className='areabtnlast'>Supermarket</button>
            <button className='areabtnlast'>Classrom</button>
            <button className='areabtnlast'>Washroom</button>
            <button className='areabtnlast'>Showroom</button>
            <button className='areabtnlast'>Dinning</button>
            <button className='areabtnlast'>Living Room</button>
        </div>
        <div className='mainadd'>
            <h1 className='headingadd'>Let's talk about your project.</h1>
            <button className='paraadd'> Ask for Price Quotation</button>
        </div> 
    </div>
  )
}

export default Area