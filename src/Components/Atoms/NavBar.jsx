import "./navBar.css"
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai"
import { SiAboutdotme } from "react-icons/si"
import { GrProjects } from "react-icons/gr"

function NavBar(props) {
  let displayMenu = props.displayMenu
  let setDisplayMenu = props.setDisplayMenu
  // console.log(displayMenu)

  function closeMenu() {
    setDisplayMenu(false)
  }

  return (
    <nav className={`navBar ${displayMenu === true && "active"}`}>
      <div className="menuResponsive"></div>
      <ul>
        <a onClick={closeMenu} href="#home">
          Home <span className="responsiveIconsNavBar"></span>
        </a>
        <a onClick={closeMenu} href="#aboutMe">
          About Me <span className="responsiveIconsNavBar"></span>
        </a>
        <a onClick={closeMenu} href="#projects">
          Projects <span className="responsiveIconsNavBar"></span>
        </a>
        {/* <a onClick={closeMenu} href="#contact">Contact <span className="responsiveIconsNavBar"></span></a> */}
      </ul>
    </nav>
  )
}

export default NavBar
