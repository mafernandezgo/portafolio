
import './cardAboutMe.css'
import {RiHtml5Fill, RiReactjsFill, RiCss3Fill} from 'react-icons/ri'
import{SiTailwindcss, SiBootstrap, SiJavascript} from 'react-icons/si'

function CardAboutMe (){
    return (
        <section className="cardAboutMe">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ut suscipit doloremque consectetur perferendis autem exercitationem, sunt dolores saepe quam inventore molestias eum temporibus. Eveniet facere velit natus maxime quidem.</p>
            <div className="img"><div className="filterColor"></div></div>
            <aside>
                <h3>soft skills</h3>
                <ul>
                    <li><span><RiHtml5Fill/></span> html</li>
                    <li><span><RiCss3Fill/></span> css</li>
                    <li><span><SiTailwindcss/></span> Tailwind</li>
                    <li><span><SiBootstrap/></span>Bootstrap</li>
                    <li><span><SiJavascript/></span>Javascript</li>
                    <li><span><RiReactjsFill/></span> React</li>
                </ul>
            </aside>
        </section>
    )
}

export default CardAboutMe