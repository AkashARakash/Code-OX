import React from 'react'
import './Categori.css'

function Categori() {
  return (
    <div className='categori'>
        <div>
            <h1 className='categorihead'>Product Categories</h1>
            <p className='categoripara'>Discover our wide range of lighting fixture categories and find the perfect addition to <br /> your space. From modern to classic, we have a style to suit every taste. <br />
            Shop now and brighten up your home with our stunning lighting fixtures!</p>
        </div> <br />
        <div className='categoricolum'>
            <div className='categorirow1'>
                <p className='catrow1'>Downlights</p>
                <p className='catrow1'>Spot Lights</p>
                <p className='catrow1'>Modular Lights</p>
                <p className='catrow1'>Recessed Linear Lights</p>
                <p className='catrow1'>Magnetic Track Lights</p>
                <p className='catrow1'>Linear Pendant Lights</p>
                <p className='catrow1'>Cabinet Lights</p>
                <p className='catrow1'>Track Lights</p>
            </div>
            <div className='categorirow2'>
                <p className='catrow2'>Mirror Lights</p>
                <p className='catrow2'>Outdoor Lights</p>
                <p className='catrow2'>Industrial Lights</p>
                <p className='catrow2'>  Decorative Lights</p>
                <p className='catrow2'> Facad Lights </p>
                <p className='catrow2'> Strip & Neon Lights </p>
                <p className='catrow2'> Accessories</p>
                <p className='catrow2'> Street Lights</p>
            </div>
        </div>
        <div className='mainadd'>
        <h1 className='headingadd'>Let's talk about your project.</h1>
        <button className='paraadd'> Ask for Price Quotation</button>
    </div> 
    </div>
  )
}

export default Categori