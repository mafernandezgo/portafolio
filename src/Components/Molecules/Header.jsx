import NavBar from "../Atoms/NavBar"
import "./header.css"
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"

function Header() {
  const [positionY, setPositionY] = useState(0)
  const [activeHeader, setActiveHeader] = useState(false)
  const [displayMenu, setDisplayMenu] = useState(false)

  document.addEventListener("scroll", () => {
    setPositionY(window.pageYOffset)

    if (positionY > 530) {
      setActiveHeader(true)
    } else if (positionY < 530) {
      setActiveHeader(false)
    }
  })

  function menuDisplay() {
    setDisplayMenu(!displayMenu)
  }

  return (
    <header className={`header`}>
      <a href="" className="logo">
        Manuela Fernandez
      </a>
      <div onClick={menuDisplay} className="menuIcon">
        <AiOutlineMenu />
      </div>
      {displayMenu && <NavBar />}
      <NavBar displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
    </header>
  )
}

export default Header
