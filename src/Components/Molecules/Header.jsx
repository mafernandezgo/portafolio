import NavBar from "../Atoms/NavBar";
import './header.css'
import {GiCat,GiSittingDog} from 'react-icons/gi'
import {BsSuitHeartFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react";


function Header () {
    const [positionY, setPositionY]= useState(0)
    const [activeHeader, setActiveHeader]= useState(false)
    const [displayMenu, setDisplayMenu]=useState(false)
    
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
    function menuDisplay(){
        setDisplayMenu(!displayMenu)
    }

    return(
        <header className={`header neumorphism`}>
            <a href="" className="logo"> 
                <div className="dog"><GiSittingDog/></div> 
                <div className="heart"><BsSuitHeartFill/></div> 
                <div className="cat"><GiCat /></div> 
            </a>
            {/* <a href="" className="logo">  <span>MF</span></a> */}
            <div onClick={menuDisplay} className="menuIcon"><AiOutlineMenu/></div>
            {displayMenu && <NavBar/>}
            <NavBar displayMenu= {displayMenu} setDisplayMenu={setDisplayMenu} />
        </header>
    )
}

export default Header