import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone, faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookSquare, faLinkedin, faYoutube, faWhatsapp, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Navbaro() {
  return (
    <div className='navbar'>
      <span className='icon'>
        <FontAwesomeIcon className='ic'  icon={faSquarePhone} style={{ color: '#ffffff' }} />
        <span className="contact-info">042232332 043236088</span>
        <FontAwesomeIcon  className='ic' icon={faEnvelope} style={{ color: '#ffffff' }} />
        <span className="contact-info">sales@sunriseoasislighting.com</span>
      
      <span className='iconright'>
        <FontAwesomeIcon className='ic' icon={faShoppingCart} style={{ color: '#ffffff' }} />   Your cart
        <strong className='st'>|</strong>
        <FontAwesomeIcon className='ic' icon={faInstagram} style={{ color: '#ffffff' }} />
        <FontAwesomeIcon className='ic' icon={faFacebookSquare} style={{ color: '#ffffff' }} />
        <FontAwesomeIcon className='ic' icon={faLinkedin} style={{ color: '#ffffff' }} />
        <FontAwesomeIcon className='ic' icon={faYoutube} style={{ color: '#ffffff' }} />
        <FontAwesomeIcon className='ic' icon={faWhatsapp} style={{ color: '#ffffff' }} />
        <FontAwesomeIcon className='ic' icon={faTwitterSquare} style={{ color: '#ffffff' }} />
        </span>
      </span>
    </div>
  );
}

export default Navbaro;
