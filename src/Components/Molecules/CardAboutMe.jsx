
import './cardAboutMe.css'
import {RiHtml5Fill, RiReactjsFill, RiCss3Fill} from 'react-icons/ri'
import{SiTailwindcss, SiBootstrap, SiJavascript} from 'react-icons/si'

function CardAboutMe (){
    return (
        <section className="cardAboutMe">
            <h2>About Me</h2>
            <p>I'm a Mechanical Engineer with 4 years of experience in engineering projects development , and now I have been dedicated the last half year exclusively to web development.</p>
            <div className="img"><div className="filterColor"></div></div>
            <aside>
                <h3>Skills</h3>
                <ul>
                    <li><div><span><RiHtml5Fill/></span></div> html</li>
                    <li><div><span><RiCss3Fill/></span></div> css</li>
                    <li><div><span><SiTailwindcss/></span></div> Tailwind</li>
                    <li><div><span><SiBootstrap/></span> </div>Bootstrap</li>
                    <li><div><span><SiJavascript/></span> </div>Javascript</li>
                    <li><div><span><RiReactjsFill/></span></div> React</li>
                </ul>
            </aside>
        </section>
    )
}

export default CardAboutMe