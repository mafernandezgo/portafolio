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
                <div className="sentEmail">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia atque exercitationem corrupti eveniet quibusdam, provident dolores odio, rem id repellendus molestias possimus delectus! Fuga inventore, sint quod itaque quidem vero?</p>
                    <form action="mailto:mafernandezgo@hotmail.com?subject=myform_submission"> <button className="neumorphism"> Enviame un Email </button> </form>
                </div>
                <section className="personalInfo">
                    <div>
                        <h3>correo</h3>
                        <h4>mafernandezgo@hotmail.com</h4>
                    </div>
                    <div>
                        <h3>celular</h3>
                        <h4>313 794 8111</h4>
                    </div>
                    <div>
                        <h3>redes Sociales </h3>
                        <a href="" className=" btnSocial neumorphism github"> 
                            <span className="socialMediaName"> <RiGithubFill/> Github</span>
                            <span className="socialMediaRoot">@mafernandezgo</span>
                        </a>
                        <a href="www.linkedin.com/in/mafernandezgo" className=" btnSocial neumorphism linkedin"> 
                            <span className="socialMediaName"> <RiLinkedinBoxFill/> LinkedIn</span>
                            <span className="socialMediaRoot">@mafernandezgo</span>
                        </a>
                        <a href="" className=" btnSocial neumorphism discord"> 
                            <span className="socialMediaName"> <SiDiscord/> Discord</span>
                            <span className="socialMediaRoot">@mafernandezgo</span> 
                        </a>
                    </div>
                    <a className="neumorphism download" href="/assets/ManuelaFernandez.pdf" download>
                        descargar mi CV <span> <FaFileDownload/> </span>
                    </a>
                </section>
            </div>
        </section>
    )
}

export default Contact