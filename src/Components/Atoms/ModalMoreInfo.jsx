import { BsGithub } from "react-icons/bs"
import { GrDeploy } from "react-icons/gr"
import { BiRightArrow, BiLeftArrow } from "react-icons/bi"
import { MdOutlineArrowForwardIos, MdArrowBackIos } from "react-icons/md"
import "./modalMoreInfo.css"
import { useState } from "react"

import {
  RiHtml5Fill,
  RiReactjsFill,
  RiCss3Fill,
  RiGithubLine,
} from "react-icons/ri"
import { SiTailwindcss, SiBootstrap, SiJavascript } from "react-icons/si"

function ModalMoreInfo({
  name,
  tags,
  deployUrl,
  repositoryUrl,
  imgCarousel,
  img,
}) {
  let sortTags = tags.sort()

  const [indexImg, setIndexImg] = useState(0)
  const [unavailableLink, setUnavailableLink] = useState(deployUrl)

  function handlerLeft() {
    setIndexImg(indexImg - 1)
    if (indexImg < 1) {
      setIndexImg(imgCarousel.length - 1)
    }
  }
  function handlerRigth() {
    setIndexImg(indexImg + 1)
    if (indexImg > imgCarousel.length - 2) {
      setIndexImg(0)
    }
  }

  const icons = [
    {
      name: "Html5",
      icon: <RiHtml5Fill />,
    },
    {
      name: "Reactjs",
      icon: <RiReactjsFill />,
    },
    {
      name: "Css3",
      icon: <RiCss3Fill />,
    },
    {
      name: "Tailwindcss",
      icon: <SiTailwindcss />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
    },
  ]

  return (
    <div className="modalMoreInfo">
      <div className="modalContainer">
        <h3> {name}</h3>
        <div className="tagsWrapper">
          <div className="tags">
            {sortTags.map((tag) => {
              return (
                <div className={`tag ${tag}`}>
                  {icons.find((e) => e.name === tag)?.icon}
                </div>
              )
            })}
          </div>
        </div>
        <div className="links">
          <a className="neumorphism link" href={repositoryUrl} target="_blank">
            <BsGithub />
          </a>
          <a
            className={`${
              unavailableLink === "" && "unavailable"
            } neumorphism link`}
            href={deployUrl}
            target="_blank"
          >
            <div>
              <GrDeploy />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ModalMoreInfo
