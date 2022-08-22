import React from 'react'
import Header from '../Header'
import "./styles2.css"

export default function EarnCrypto2() {
  return (
    <div>
         <div className='Earn_Crypto_Container'>
           <Header/>
            <div className='sub_cont'>
                <img src='/shape_1.png' className='img1'></img>
                <img src='/skyScrapers.png' className='img2'></img>
                {/* <img src='/gray-dots.png' className='img3'></img> */}
                <img src='/blueCircle.png' className='img4'></img>
                <div className='text_section'>
                <h1>Page 2</h1>
           <p>By participating in the community, you will be able to Earn trees tokens.</p>
        </div>
                </div>
        </div>
    </div>
  )
}
