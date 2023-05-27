import Title from "../Atoms/Title"
import { MdOutlineArrowForwardIos } from "react-icons/md"
import CardAboutMe from "../Molecules/CardAboutMe"
import CardMoreInfo from "../Molecules/CardMoreInfo"
import { SiDiscord } from "react-icons/si"
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri"
import { FaFileDownload } from "react-icons/fa"

import {
  RiHtml5Fill,
  RiReactjsFill,
  RiCss3Fill,
  RiGithubLine,
} from "react-icons/ri"
import { SiTailwindcss, SiBootstrap, SiJavascript } from "react-icons/si"
import "./aboutMe.css"
import { useState } from "react"

function AboutMe() {
  const [toggle, setToggle] = useState(false)

  function handlerBtnAboutMe() {
    setToggle(!toggle)
  }

  return (
    <section id="aboutMe" className="aboutMe">
      <Title name="My Experience" />
      <section className="amMain">
        <div>
          <p>
            I am a Frontend developer with an undergraduate degree in Mechanical
            Engineering and over five years of professional experience in
            diverse engineering roles, projects, design, and web development. I
            have experience working with React/Redux infrastructure, for the
            last year I have been working for a B2B pricing and sales solutions
            software company with headquarters in Austin, Texas.
          </p>

          <aside className="skills">
            <h3>Skills</h3>
            <ul>
              <li>
                <div>
                  <span>
                    <RiHtml5Fill />
                  </span>
                </div>{" "}
                html
              </li>
              <li>
                <div>
                  <span>
                    <RiCss3Fill />
                  </span>
                </div>{" "}
                css
              </li>
              <li>
                <div>
                  <span>
                    <SiTailwindcss />
                  </span>
                </div>{" "}
                Tailwind
              </li>
              <li>
                <div>
                  <span>
                    <SiBootstrap />
                  </span>{" "}
                </div>
                Bootstrap
              </li>
              <li>
                <div>
                  <span>
                    <SiJavascript />
                  </span>{" "}
                </div>
                Javascript
              </li>
              <li>
                <div>
                  <span>
                    <RiReactjsFill />
                  </span>
                </div>{" "}
                React
              </li>
              <li>
                <div>
                  <span>
                    <RiGithubLine />
                  </span>
                </div>
                Github
              </li>
            </ul>
          </aside>
          <aside>
            <h3>say hello</h3>
            <div>
              <h3>
                <RiMailLine />
              </h3>
              <span>mafernandezgo@hotmail.com</span>
            </div>
            <div>
              <h3>
                <RiGithubFill />
                <RiLinkedinBoxFill />
                <SiDiscord />
              </h3>
              <span>@mafernandezgo</span>
            </div>
          </aside>
        </div>
      </section>
    </section>
  )
}

export default AboutMe
