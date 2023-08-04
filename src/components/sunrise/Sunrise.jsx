import React from 'react'
import './Sunrise.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sunrise() {
  return (
    <div className='main'>
        <img className='imgmain' src={require('./img/project1_petrol_pump 1.jpg')} alt="img" />
        <div className='twodiv'>
        <span className='nav'>
            <img className='pumpimg' src={require('./img/Full Logo.jpg')} alt="logo" />
        </span>
        <span className='centerdiv'>
            <span className='division'>Home</span>
            <span className='division'>About US</span>
            <span className='division'>Shop</span>
            <span className='division'>Blog</span>
        </span>
        <span className='btn'>
            <button className='btnwhite'>Smart Touch</button>
            <button className='btnnormal'>Login/Register</button>
        </span>
        </div>
        <div className='input'>
            <span>
            <input className='insert' type="text" placeholder='Search a Product...| '  />
            
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={{color: "#ffffff",}} />
            </span>    
        </div>
        <div className='leftpara'>
            <span className='lefthead'>
                <h1 className='hone'>Illuminate your space <br /> with style and efficiency</h1>
                <p className='para1'>We believe in the power of brands to create credibility. That’s why we partner with the <br /> best to bring you top-quality products. Trust us to deliver excellence, every time. <br /> Shop with confidence, knowing you’re getting the best.</p>
                <button className='yellowbtn'>Learn More about Project</button>
            </span>
            
            <span className='threeimg'>
                <img className='threepic' src={require('./img/project1_petrol_pump 2.png')} alt="" />
                <img className='threepic' src={require('./img/image 4.png')} alt="..." />
                <img className='threepic' src={require('./img/project1_petrol_pump 2 (1).jpg')} alt="" />
            </span>
        </div>
        <div className='last'>
            <img className='white' src={require('./img/Line 28.jpg')} alt="" />
            <img className='yellow' src={require('./img/Line 27.png')} alt="" />
            <img className='white' src={require('./img/Line 28.jpg')} alt="" />
        </div>
    </div>
  )
}

export default Sunrise