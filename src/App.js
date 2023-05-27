import logo from "./logo.svg"
import "./App.css"
import NavBar from "./Components/Atoms/NavBar"
import Header from "./Components/Molecules/Header"
import AboutMe from "./Components/Organisms/AboutMe"
import Projects from "./Components/Organisms/Projects"
import Contact from "./Components/Organisms/Contact"
import Home from "./Components/Organisms/Home"
import { useState } from "react"

function App() {
  const [positionY, setPositionY] = useState(0)

  document.addEventListener("scroll", () => {
    setPositionY(window.pageYOffset)
  })

  return (
    <div>
      {positionY > 450 && <Header />}
      <Home />
      <AboutMe />
      <Projects />
      {/* <Contact /> */}
    </div>
  )
}

export default App
