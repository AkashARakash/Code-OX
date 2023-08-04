import React from 'react'
import './Feature.css'

function Feature() {
  return (
    <div>
    <div className='feature'>
        <span className='featurehead'>
            <h1 className='featurehone'>Featured Products <span className='subpara'>View More Featured Product</span></h1>
            <p className='featurepara'>Brighten up your space with our featured lighting fixtures! From sleek and modern to <br /> classic and elegant, we have the perfect fixture to match your style. Shop now and see <br /> the difference good lighting can make!</p>
        </span>
        <span className='btnsright'>
            <button className='doorsblack'>Indoor</button>
            <button className='doors'>Outdoor</button>
            <button className='doors'>Decoration</button>
            <button className='doors'>Strip & Neon</button>
        </span>
    </div>
    <div className='flex' >
    <span className='six'>
        <img className='recimg' src={require('./image/Rectangle 224 (1).png')} alt="" />
        <img className='lightimg' src={require('./image/Essential-GU10 1.jpg')} alt="" />
        <span className='lastdetails'>
            <h6 className='htwo'>Essential</h6>
            <h4 className='hfour'>AED 85.75 / Piece</h4>
            <h6 className='hsix'>Please Login/Register to See <br /> the Stock Details</h6>
        </span>
    </span>
    <span className='six'>
        <img className='recimg' src={require('./image/Rectangle 224 (1).png')} alt="" />
        <img className='lightimg' src={require('./image/Essential-GU10 1.jpg')} alt="" />
        <span className='lastdetails'>
            <h6 className='htwo'>Essential</h6>
            <h4 className='hfour'>AED 85.75 / Piece</h4>
            <h6 className='hsix'>Please Login/Register to See <br /> the Stock Details</h6>
        </span>
    </span>
    <span className='six'>
        <img className='recimg' src={require('./image/Rectangle 224 (1).png')} alt="" />
        <img className='lightimg' src={require('./image/Essential-GU10 1.jpg')} alt="" />
        <span className='lastdetails'>
            <h6 className='htwo'>Essential</h6>
            <h4 className='hfour'>AED 85.75 / Piece</h4>
            <h6 className='hsix'>Please Login/Register to See <br /> the Stock Details</h6>
        </span>
    </span>
    <span className='six'>
        <img className='recimg' src={require('./image/Rectangle 224 (1).png')} alt="" />
        <img className='lightimg' src={require('./image/Essential-GU10 1.jpg')} alt="" />
        <span className='lastdetails'>
            <h6 className='htwo'>Essential</h6>
            <h4 className='hfour'>AED 85.75 / Piece</h4>
            <h6 className='hsix'>Please Login/Register to See <br /> the Stock Details</h6>
        </span>
    </span>
    <span className='six'>
        <img className='recimg' src={require('./image/Rectangle 224 (1).png')} alt="" />
        <img className='lightimg' src={require('./image/Essential-GU10 1.jpg')} alt="" />
        <span className='lastdetails'>
            <h6 className='htwo'>Essential</h6>
            <h4 className='hfour'>AED 85.75 / Piece</h4>
            <h6 className='hsix'>Please Login/Register to See <br /> the Stock Details</h6>
        </span>
    </span>
    <span className='six'>
        <img className='recimg' src={require('./image/Rectangle 224 (1).png')} alt="" />
        <img className='lightimg' src={require('./image/Essential-GU10 1.jpg')} alt="" />
        <span className='lastdetails'>
            <h6 className='htwo'>Essential</h6>
            <h4 className='hfour'>AED 85.75 / Piece</h4>
            <h6 className='hsix'>Please Login/Register to See <br /> the Stock Details</h6>
        </span>
    </span>
    </div>
</div>
  )
}

export default Feature