import { useState } from "react"
import { GrClose } from "react-icons/gr"
import "./cardProject.css"
import ModalMoreInfo from "./ModalMoreInfo"

function CardProject(props) {
  const [showName, setShowName] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showCloseIcon, setShowCloseIcon] = useState(false)
  const { name, urlDeploy, imgCarousel, urlRepository, tags, img } = props

  function nameShow() {
    setShowName(!showName)
  }
  function modalOpen() {
    setShowModal(!showModal)
    setShowCloseIcon(!showCloseIcon)
  }
  function modalClose() {
    setShowModal(!showModal)
    setShowCloseIcon(!showCloseIcon)
    setShowName(!showName)
  }

  return (
    <div onMouseOver={nameShow} onMouseOut={nameShow} className="cardProject">
      {/* <div onClick={nameShow} className="cardProject"> */}
      <h1 className={` cardProjectTitle ${showName === true && "active"}`}>
        {name}
      </h1>
      <img src={process.env.PUBLIC_URL + img} alt={name} />
      <button
        onClick={modalOpen}
        className={` openModal  ${showName === true && "active neumorphism"}`}
      >
        more Info
      </button>
      {showModal && (
        <ModalMoreInfo
          name={name}
          tags={tags}
          deployUrl={urlDeploy}
          repositoryUrl={urlRepository}
          imgCarousel={imgCarousel}
          img={img}
        />
      )}
      {showCloseIcon && (
        <a onClick={modalClose} className="iconClose">
          <GrClose />
        </a>
      )}
    </div>
  )
}

export default CardProject
