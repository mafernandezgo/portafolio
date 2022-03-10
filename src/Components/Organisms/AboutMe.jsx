import Title from "../Atoms/Title";
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import CardAboutMe from "../Molecules/CardAboutMe";
import CardMoreInfo from "../Molecules/CardMoreInfo";
import './aboutMe.css'
import { useState } from "react";

function AboutMe () {
    const [toggle, setToggle] = useState(false)

    function handlerBtnAboutMe(){
        setToggle(!toggle)
    }

    return (
        <section id="aboutMe" className="aboutMe">
            <section className="amMain">
                <div className="amCards">
                    <div className={`mainAboutMe ${ toggle === true && "inactive"}`}>
                        <CardAboutMe />
                    </div>
                    <div className={`mainMoreInfo ${ toggle === false && "inactive"}`}>
                        < CardMoreInfo />
                    </div>
                    <button onClick={handlerBtnAboutMe} className={`btnNext neumorphism ${ toggle === true && "before"}`}><span><MdOutlineArrowForwardIos/></span></button>
                </div>
            </section>
        </section>
    )
}

export default AboutMe