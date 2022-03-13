import './home.css'
import test from './test.png'
function Home (){
    return(
        <section id="home" className="home">
            <div className="imgWrapper"><img className="img" src={test}/></div>
            <h1> Hello World, <br/> I'm <span className="name">Manuela Fernandez</span> <br/> Frontend Developer</h1>
        </section>
    )
}

export default Home