import React,{useState, useRef, useEffect} from 'react'
import './header.css'

export default function Header() {
  const toggle1=useRef()
  const toggle2=useRef()
  const toggle3=useRef()
  const toggle4=useRef()
  const toggle5=useRef()
  const [namee, setName]=useState("none")
  const [namee2, setName2]=useState("none")
  const [namee3, setName3]=useState("none")
  const [namee4, setName4]=useState("none")
  const [namee5, setName5]=useState("none")
  const [navBar, setnavBar]=useState("0px")

  const handleNav=()=>{
    if(navBar==="0px"){
       setnavBar("20em")
    }else if(navBar==="20em"){
        setnavBar("0px")
    }
  }

  const click1=()=>{
    // console.log(toggle1.current.classList)
    // toggle1.current.classList.toggle('none')
    // console.log(toggle1.current.classList)
 
    if(namee==="none"){
        setName("flex")
    }
    else if(namee==="flex"){
        setName("none")
    }
  }
  const click2=()=>{
    if(namee2==="none"){
        setName2("flex")
    }
    else if(namee2==="flex"){
        setName2("none")
    }
  }
  const click3=()=>{
    if(namee3==="none"){
        setName3("flex")
    }
    else if(namee3==="flex"){
        setName3("none")
    }
  }
  const click4=()=>{
    if(namee4==="none"){
        setName4("flex")
    }
    else if(namee4==="flex"){
        setName4("none")
    }
  }
  const click5=()=>{
    if(namee5==="none"){
        setName5("flex")
    }
    else if(namee5==="flex"){
        setName5("none")
    }
  }

  return (
    <div className='Header'>
        <div className='logo'>CryptoTrees</div>
        <div className="compView">
        <div className='links'>
            <div className="link_head">
                <div className='dropDownHead'>
                <span>About</span>
                <span className='icon'><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></span> 
                </div> 
                <div className='dropDownBody'>
                    <span>Our Mission</span>
                    <span>Whitepaper</span>
                    <span>Roadmap</span>
                    <span>FAQs</span>
                    <span>Twitter</span>
                </div> 
            </div>
            <div className="link_head">
                <div className='dropDownHead'>
                <span>Transparency</span>
                <span className='icon'><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></span> 
                </div>
                <div className='dropDownBody'>
                    <span>Donation receipt</span>
                    <span>Daily Draw Winners</span>
                </div>
            </div>
            <div className="link_head">
                     <div className='dropDownHead'>
                     <span>Buy</span>
                <span className='icon'><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></span> 
                    </div>
                    <div className='dropDownBody'>
                    <span>Buy CryptoTrees Tokens</span>
                    <span>Buy CryptoTrees NFTs</span>
                    <span>Add Liquidity</span>
                </div>
            </div>
            <div className="link_head">
                    <div className='dropDownHead '>
                    <span>NFTs</span>
                <span className='icon'><i class="fa fa-arrow-circle-down" aria-hidden="true"></i></span> 
                    </div>
                    <div className='dropDownBody'>
                    <span>NFT Staking Hub</span>
                    <span>Shuffle</span>
                    <span className="moreDetails">
                        Collection <i class="fa fa-arrow-circle-right icon" aria-hidden="true"></i>
                        <div className='details'>
                            <span>3D Trees</span>
                            <span>Carbon Offset</span>
                            <span>Arbor Day 2022</span>
                        </div>
                    </span>
                </div>
            </div>
        </div>
        <a href='/EarnCrypto2'> <button> <i class="fa fa-usd" aria-hidden="true"></i> EARN CRYPTO</button></a>
        </div>
        <div className='mobileView'>
       {navBar==="20em"? <i class="fa fa-times icon" aria-hidden="true" onClick={handleNav}></i>:<i class="fa fa-bars icon" aria-hidden="true" onClick={handleNav}></i>} 
        </div>
        <div className='mobileContent' style={{"height":navBar}}>
            <div className='one cont'>
                <p onClick={click1}>About {namee==="none"?<i class="fa fa-arrow-down icon" aria-hidden="true"></i>:<i class="fa fa-arrow-up icon" aria-hidden="true"></i>}</p>
                <div className='drop none'  ref={toggle1} style={{"display":namee}}>
                <span>Our Mission</span>
                <span>WhitePaper</span>
                <span>details</span>
                <span>details</span>
                <span>details</span>
                </div>
            </div>
            <div className='one cont'>
                <p onClick={click2}>Transparency {namee2==="none"?<i class="fa fa-arrow-down icon" aria-hidden="true"></i>:<i class="fa fa-arrow-up icon" aria-hidden="true"></i>}</p>
                     <div className='drop' ref={toggle2} style={{"display":namee2}}>
                        <span>details</span>
                        <span>details</span>
                        <span>details</span>
                        <span>details</span>
                        <span>details</span>
                     </div>
            </div>
            <div className='one cont'>
                <p onClick={click3}>Buy {namee3==="none"?<i class="fa fa-arrow-down icon" aria-hidden="true"></i>:<i class="fa fa-arrow-up icon" aria-hidden="true"></i>}</p>
                     <div className='drop' ref={toggle3} style={{"display":namee3}}>
                        <span>details</span>
                        <span>details</span>
                     </div>
            </div>
            <div className='one cont'>
                <p onClick={click4}>NFTs {namee4==="none"?<i class="fa fa-arrow-down icon" aria-hidden="true"></i>:<i class="fa fa-arrow-up icon" aria-hidden="true"></i>}</p>
                     <div className='drop' ref={toggle4} style={{"display":namee4}}>
                        <span>details</span>
                        <span>details</span>
                        <span>details</span>
                        <span>details</span>
                     </div>
            </div>
            <div className='one cont'>
                <p onClick={click5}>Earn Crypto {namee5==="none"?<i class="fa fa-arrow-down icon" aria-hidden="true"></i>:<i class="fa fa-arrow-up icon" aria-hidden="true"></i>}</p>
                     <div className='drop' ref={toggle5} style={{"display":namee5}}>
                        <span>details</span>
                        <span>details</span>
                     </div>
            </div>
        </div>
    </div>
  )
}
