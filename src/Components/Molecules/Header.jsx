import NavBar from "../Atoms/NavBar";
import './header.css'
import {GiCat,GiSittingDog} from 'react-icons/gi'
import {BsSuitHeartFill} from 'react-icons/bs'
import { useState } from "react";

function Header () {
    const [positionY, setPositionY]= useState(0)
    const [activeHeader, setActiveHeader]= useState(false)
    
    // document.addEventListener("scroll", ()=> {
    //     setPositionY(window.pageYOffset)
        
    //     if(positionY > 530){
    //         setActiveHeader(true)
    //     } else if (positionY < 530){
    //         setActiveHeader(false)
    //     } else if(positionY === 0){
    //         setActiveHeader(false)
    //     }
        // console.log(activeHeader)
    // })
    
   
    return(
        <header className={`header neumorphism`}>
            <a href="" className="logo"> 
                <div className="dog"><GiSittingDog/></div> 
                <div className="heart"><BsSuitHeartFill/></div> 
                <div className="cat"><GiCat /></div> 
            </a>
            {/* <a href="" className="logo">  <span>MF</span></a> */}
            <NavBar />
        </header>
    )
}

export default Header