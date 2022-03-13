import './home.css'
import test from './test.png'
function Home (){

    let name = "Manuela Fernandez"
//     let nameSplit = name.split('')

//     function letterDancing () {  return nameSplit.forEach(x => 
//         x.addEventListener("click", () => {console.log(x)}))
// }

    return(
        <section id="home" className="home">
            <div className="imgWrapper"><img className="img" src={test}/></div>
            <h1> Hello World, <br/> I'm <span className="name">{name}</span> <br/> Frontend Developer</h1>
        </section>
    )
}

export default Home