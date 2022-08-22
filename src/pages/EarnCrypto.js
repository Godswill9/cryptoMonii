import React, { useEffect, useRef, useState } from 'react'
import Header from "../Header";
import './styles.css'

export default function EarnCrypto() {
    const HeaderRef=useRef()
    const numRef1=useRef()
    const numRef2=useRef()
    const numRef3=useRef()
  
    const[numm1, setNumm1]=useState(10)
    const[numm2, setNumm2]=useState(159)
    const[numm3, setNumm3]=useState(2192)

//     var num1=0
//     var num2=0
//     var num3=0

//   var interval1=4000/val1
//   var interval2=6000/val2
//   var interval3=8000/val3
//   var val1=10
//   var val2=159
//   var val3=2192
//   useEffect(()=>{
//     let countNumber=setInterval(function(){
//         num1+=1
//         setNumm1(num1)
//      }, interval1)
//       if(num1===val1){
//           clearInterval(countNumber)
//         }
    
//        let countNumber2=setInterval(function(){
//         num2+=1
//         setNumm2(num2)
//      }, interval2)
//      if(num2===val2){
//           clearInterval(countNumber2)
//         }
    
//        let countNumber3=setInterval(function countNumber3(){
//         num3+=1
//         setNumm3(num3)
//      }, interval3)
//        if(num3===val3){
//           clearInterval(countNumber3)
//         }
//   },[])


  return (
    <div>
        <div className='Earn_Crypto_Container'>
           <Header/>
            <div className='sub_cont'>
                {/* <img src='/shape_3.png' className='img1'></img> */}
                <img src='/grasses (3).png' className='img2'></img>
                <div className='text_section'>
                <h1 ref={HeaderRef}>Plant trees</h1>
           <p>CryptoTrees uses blockchain technology to plant trees, save forsts, and assist the global fight againdt climate change.
            Join the fight by reaning crypto through games, initiatives, and community participation</p>
           <button>START EARNING</button>
           <section>
            <div>
                <h3 ref={numRef1}>{numm1}</h3>
                <span>Trees Donated</span>
            </div>
            <div>
                <h3 ref={numRef2}>{numm2}<sup>2</sup></h3>
                <span>Forest Rescued</span>
            </div>
            <div>
            <i class="fa-solid fa-smog"  aria-hidden="false"></i><h3 ref={numRef3}>{numm3}mt</h3>
                <span>CO<sub>2</sub> Offset/Year</span>
            </div>
           </section>
        </div>
                </div>
                <div className='sub_cont2'>
                    <img src='brokenGround (2).png' className='img6'></img>
                    {/* <img src='/blueCircle.png' className='img1'></img>
                    <img src='/dark_blue.png' className='img2'></img>
                    <img src='/fine_blue.png' className='img3'></img>
                    <img src='/dark_blue.png' className='img4'></img>
                    <img src='/dark_blue.png' className='img5'></img> */}
                    {/* <img src='/png_dots_new2.png' className='img5'></img> */}
                    <div className='text-section2'>
                        <h2>Earn tokens</h2>
                        <img src='/coin_hand.jfif'></img>
                    </div>
                </div>
    <div className='sub_cont3'>
        {/* <img src="/drop.png" className='img1'></img> */}
        {/* <img src="Untitled-22.png" className='img2'></img> */}
        <img src="Untitled-5.png" className='img3'></img>
        <img src="Untitled-5.png" className='img4'></img>
        {/* <img src="Untitled-7.png" className='img5'></img> */}
        {/* <img src="Untitled-7.png" className='img6'></img> */}
        {/* <img src="/grains.png" className='img4'></img>
        <img src="/drop.png" className='img5'></img> */}
        {/* <img src="Untitled-3.png" className='img2'></img> */}
        {/* <img src="Untitled-4.png" className='img3'></img> */}
        {/* <img src="buld.png" className='img4'></img> */}
        <div className='note_details'>
        <h1>Charities we support</h1>
        <section>
            <div>
            <h3>Trees for the future</h3>
            <img className='img_logo' src='/lego.png'></img>
            <p>Through their 4-year training program, called the FOREST GARDEN APPROACH, 
                farmers plant thousands of trees that restore their soil.This helps farmers grow a large 
                variiety of fruits and vegetables to eat and sell. So not only does each forest 
                garden capture carbon and increase biodiversity, but it also ends hunger and poverty.
            </p>
            <button>LEARN MORE</button>
            </div>
            <div>
            <h3>Rainforest rescue</h3>
            <img className='img_logo' src='/amazon.png'></img>
            <p>Through their 4-year training program, called the FOREST GARDEN APPROACH, 
                farmers plant thousands of trees that restore their soil.This helps farmers grow a large 
                variiety of fruits and vegetables to eat and sell. So not only does each forest 
                garden capture carbon and increase biodiversity, but it also ends hunger and poverty.
            </p>
            <button>#team trees</button>
            </div>
            <div>
            <h3>Trees for the future</h3>
            <img className='img_logo' src='/adidas.png'></img>
            <p>Through their 4-year training program, called the FOREST GARDEN APPROACH, 
                farmers plant thousands of trees that restore their soil.This helps farmers grow a large 
                variiety of fruits and vegetables to eat and sell. So not only does each forest 
                garden capture carbon and increase biodiversity, but it also ends hunger and poverty.
            </p>
            <button>LEARN MORE</button>
            </div>
        </section>
        </div>
    </div>
    <div className='sub_cont4'>
        {/* <img src='./Untitled-2.png' className='one' ></img> */}
        <img src='./Untitled-2.png' className='two' ></img>
        <div className='noteDetails'>
            <h1>Get involved</h1>
            <section>
            <button><i class="fa fa-twitter" aria-hidden="true"></i><span>DISCORD</span></button>
            <button><i class="fa fa-reddit-alien" aria-hidden="true"></i> <span>REDDIT</span></button>
            <button><i class="fa fa-tree" aria-hidden="true"></i> <span>BUY TREES TOKENS</span></button>
            <button><i class="fa fa-twitter" aria-hidden="true"></i> <span>TINYCHART</span></button>
            <button> <i class="fa fa-twitter" aria-hidden="true"></i> <span>TWITTER</span></button>
            <button><i class="fa fa-diamond" aria-hidden="true"></i><span>ALGOGEMS</span></button>
            <button> <i class="fa fa-tint" aria-hidden="true"></i><span>ADD LIQUIDITY</span></button>
            <button><i class="fa fa-search" aria-hidden="true"></i><span>ALGO EXPLORER</span></button>
            </section>
            {/* className='but' */}
        </div>
    </div>
    <div className='footer'>
        <div className='up'>
        <div className='one'>
            <p>BLOCKCHAIN PARTNER</p>
            <h3>Algorand</h3>
            <span>CryptoTrees is powered by the Algorand blockchain.Algorand is carbon negative
                 and provides a green alternative to blockchain technology
            </span>
        </div>
        <div className='two'>
            <p>QUICK LINKS</p>
            <a href=''>view TREES on Tinychart</a>
            <a href=''>Buy TREES on Tinyman</a>
            <a href=''>Add liquidity on Tinyman</a>
            <a href=''>Explore NFT<sub>s</sub> on Algogems</a>
        </div>
        </div>
        <div className='down'>
        <p>@ copyright 2022 | CryptoTrees | All Rights Reserved | Privacy & Terms</p>
        <p>fBook, discord, twitter</p>
        </div>
    </div>
    <span className='goUp'><a href="#"><i class="fa fa-hand-o-up" aria-hidden="true"></i></a></span>
</div>
</div>
)
}
