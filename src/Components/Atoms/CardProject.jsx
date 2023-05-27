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

  console.log(showName)
  return (
    <div
      onMouseEnter={() => {
        setShowName(true)
      }}
      onMouseLeave={() => setShowName(false)}
      className="cardProject"
    >
      {/* <div onClick={nameShow} className="cardProject"> */}
      <img src={process.env.PUBLIC_URL + img} alt={name} />
      {/* <button onClick={modalOpen}>more Info</button> */}

      {/* <img src={process.env.PUBLIC_URL + img} alt={name} /> */}
      {/* <button
        onClick={modalOpen}
        className="moreInfo neumorphism"
        // className={` openModal  ${showName === true && "active neumorphism"}`}
      >
        +
      </button> */}
      {showName && (
        <ModalMoreInfo
          name={name}
          tags={tags}
          deployUrl={urlDeploy}
          repositoryUrl={urlRepository}
          imgCarousel={imgCarousel}
          img={img}
        />
      )}
      {/* {showCloseIcon && (
        <a onClick={modalClose} className="iconClose">
          <GrClose />
        </a>
      )} */}
    </div>
  )
}

export default CardProject
