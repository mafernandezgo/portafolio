import { BsGithub } from "react-icons/bs"
import { GrDeploy } from "react-icons/gr"
import { BiRightArrow, BiLeftArrow } from "react-icons/bi"
import { MdOutlineArrowForwardIos, MdArrowBackIos } from "react-icons/md"
import "./modalMoreInfo.css"
import { useState } from "react"

function ModalMoreInfo(props) {
  const name = props.name
  const tags = props.tags
  let sortTags = tags.sort()
  const deployUrl = props.deployUrl
  const repositoryUrl = props.repositoryUrl
  const imgCarousel = props.imgCarousel
  const img = props.img

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

  return (
    <div className="modalMoreInfo">
      <div className="modalContainer">
        <h3> {name}</h3>
        <div className="carousel">
          <button onClick={handlerLeft} className="neumorphism imgBefore">
            <MdArrowBackIos />
          </button>
          <img
            className="modalImg"
            src={process.env.PUBLIC_URL + imgCarousel[indexImg]}
          />
          <button onClick={handlerRigth} className="neumorphism imgNext">
            <MdOutlineArrowForwardIos />
          </button>
        </div>
        <div className="tagsWrapper">
          <h4 className="tagsTitle">Tags: </h4>
          <div className="tags">
            {sortTags.map((x) => {
              return <div className="tag"> {x} </div>
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
