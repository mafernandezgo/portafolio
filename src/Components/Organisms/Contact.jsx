import Title from '../Atoms/Title'
import {SiDiscord} from 'react-icons/si'
import {RiGithubFill,RiLinkedinBoxFill} from 'react-icons/ri'
import {FaFileDownload} from 'react-icons/fa'

import './contact.css'
function Contact (){
    return (
        <section  id="contact" className="contact">
            <Title name="Contact"/>
            <div className="contactMain">
                <section className="personalInfo">
                    <div>
                        <h3>Email</h3>
                        <h4>mafernandezgo@hotmail.com</h4>
                    </div>
                    {/* <div>
                        <h3>Phone</h3>
                        <h4>313 794 8111</h4>
                    </div> */}
                    <div>
                        <h3>Social</h3>
                        <ul>
                            <button href="" className=" btnSocial neumorphism github">
                                <span className="socialMediaName"> <span className="socialMediaIcon"><RiGithubFill/></span> <span className="socialMediaTitle">Github</span></span>
                                <span className="socialMediaRoot">@mafernandezgo</span>
                            </button>
                            <button href="www.linkedin.com/in/mafernandezgo" className=" btnSocial neumorphism linkedin">
                                <span className="socialMediaName"> <span className="socialMediaIcon"><RiLinkedinBoxFill/></span> <span className="socialMediaTitle">LinkedIn</span></span>
                                <span className="socialMediaRoot">@mfernandezgomez</span>
                            </button>
                            <button href="" className=" btnSocial neumorphism discord">
                                <span className="socialMediaName"> <span className="socialMediaIcon"> <SiDiscord/></span> <span className="socialMediaTitle">Discord</span></span>
                                <span className="socialMediaRoot">@mafernandezgo</span>
                            </button>
                        </ul>
                    </div>
                    <a className="neumorphism download" href={process.env.PUBLIC_URL + "/assets/ManuelaFernandez.pdf"} download>
                        descargar mi CV <span> <FaFileDownload/> </span>
                    </a>
                </section>
                <footer>
                    <p>Images taken from <a href="https://www.pexels.com/es-es/"> Pexels</a> , icons from <a href="https://react-icons.github.io/react-icons">React Icons</a> </p>
                </footer>
            </div>
        </section>
    )
}

export default Contact