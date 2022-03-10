// import {BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import {BsCircleFill, BsCircle} from 'react-icons/bs'
import './cardMoreInfo.css'

function CardMoreInfo () {
    return(
        <section className="cardMoreInfo inactive">
            <h2> more info</h2>
            <div>
                <h3>Education</h3>
                <ul>
                    <li className="education">
                        <span className="year">año</span>
                        <span className="info">
                            <p>profesion</p>
                            <p>ligar</p>
                        </span>
                    </li>
                    <li className="education">
                        <span className="year">año</span>
                        <span className="info">
                        <p>profesion</p>
                            <p>ligar</p>
                        </span>
                    </li>
                    <li className="education">
                        <span className="year">año</span>
                        <span className="info">
                            <p>profesion</p>
                            <p>ligar</p>
                        </span>
                    </li>
                </ul>
        
                <h3>Experience</h3>
                <ul>
                    <li className="experience">
                        <span className="year">año</span>
                        <span className="info">
                            <p>profesion</p>
                            <p>ligar</p>
                        </span>
                    </li>
                    <li className="experience">
                        <span className="year">año</span>
                        <span className="info">
                            <p>profesion</p>
                            <p>ligar</p>
                        </span>
                    </li>
                </ul>
            </div>
            <aside>
                <h3>Skills</h3>
                <div>
                    <h4> English </h4>
                    <div className="points"> 
                        <BsCircleFill/>
                        <BsCircleFill/>
                        <BsCircleFill/>
                        <BsCircleFill/>
                        <BsCircle/>
                    </div>
                </div>
                <div>
                    <h4> English </h4>
                    <div className="points">
                        <BsCircleFill/>
                        <BsCircleFill/>
                        <BsCircleFill/>
                        <BsCircleFill/>
                        <BsCircle/>
                    </div>
                </div>
                <div>
                    <h4> English </h4>
                    <div className="points">
                        <BsCircleFill/>
                        <BsCircleFill/>
                        <BsCircleFill/>
                        <BsCircleFill/>
                        <BsCircleFill/>
                    </div>
                </div>
            </aside>

            {/* <button className="before btnNext"><BiLeftArrow/></button> */}
        </section>

    )
}

export default CardMoreInfo