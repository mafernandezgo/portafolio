import Title from "../Atoms/Title"
import { SiDiscord } from "react-icons/si"
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri"
import { FaFileDownload } from "react-icons/fa"

import "./contact.css"
function Contact() {
  return (
    <section id="contact" className="contact">
      <Title name="Say Hello!" />
      <div className="contactMain">
        <section className="personalInfo">
          <div>
            <h3>Email</h3>
            <h4>mafernandezgo@hotmail.com</h4>
          </div>
          <div>
            <h3>
              <RiGithubFill />
              <RiLinkedinBoxFill />
              <SiDiscord />
            </h3>
            <h4>@mafernandezgo</h4>
          </div>
          <a
            className="neumorphism download"
            href={process.env.PUBLIC_URL + "/assets/ManuelaFernandez2023.pdf"}
            download
          >
            descargar mi CV{" "}
            <span>
              {" "}
              <FaFileDownload />{" "}
            </span>
          </a>
        </section>
      </div>
    </section>
  )
}

export default Contact
