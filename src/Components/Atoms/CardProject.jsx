import { useState } from 'react'
import { GrClose} from 'react-icons/gr'
import './cardProject.css'
import ModalMoreInfo from './ModalMoreInfo'
// import img from './WeatherApp.jpg'

function CardProject (props) {
    const[showName, setShowName] = useState(false)
    const[showModal, setShowModal] = useState(false)
    const[showCloseIcon, setShowCloseIcon] = useState(false)

    const name = props.name
    const imgCarousel = props.imgCarousel
    const deployUrl = props.urlDeploy
    const repositoryUrl = props.urlRepository
    const tags = props.tags
    const img = props.img

    function nameShow (){
        setShowName(!showName)
    }
    function modalOpen(){
        setShowModal(!showModal)
        setShowCloseIcon(!showCloseIcon)
    }
    function modalClose(){
        setShowModal(!showModal)
        setShowCloseIcon(!showCloseIcon)
        setShowName(!showName)
    }

    return(
        <div onMouseOver={nameShow} onMouseOut={nameShow} className="cardProject">
            <h1 className={` cardProjectTitle ${showName === true && "active"}`}>{name}</h1>
            <img src={process.env.PUBLIC_URL + img} alt={name} />
            <button onClick={modalOpen} className={` openModal  ${showName === true && "active neumorphism"}`}>more Info</button>
            {showModal && <ModalMoreInfo
                                        name={name} 
                                        tags={tags} 
                                        deployUrl={deployUrl} 
                                        repositoryUrl={repositoryUrl} 
                                        imgCarousel={imgCarousel} 
                                        img={img}
                                        />
            }
            {showCloseIcon && <a onClick={modalClose} className="iconClose"><GrClose/></a>}
        </div>
    )
}

export default CardProject