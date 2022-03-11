import Title from '../Atoms/Title'
import CardProject from '../Atoms/CardProject'
import './projects.css'
import { useState } from 'react'

function Projects () {

    const data = [
        {
            id:"2",
            name: "Rick & Morty",
            img: "/assets/Rick&Morty/Rick&Morty1.jpg",
            imgCarousel: [ 
                "/assets/Rick&Morty/Rick&Morty1.jpg", 
                "/assets/Rick&Morty/Rick&Morty2.jpg",
                "/assets/Rick&Morty/Rick&Morty3.jpg", 
                "/assets/Rick&Morty/Rick&Morty4.jpg"
                ],
            tags: ["api", "react", "html y css"],
            urlDeploy:"",
            urlRepository:"https://github.com/mafernandezgo/Rick-Morty-Api.git"
        },
        {
            id:"11",
            name: "Faq Accordion",
            img: "/assets/Faq/faq1.jpg",
            imgCarousel: [ 
                "/assets/Faq/faq1.jpg", 
                "/assets/Faq/faq2.jpg",
                "/assets/Faq/faq3.jpg", 
                ],
            tags: ["javascript", "html y css", "responsive"],
            urlDeploy: "https://mafernandezgo.github.io/faq-accordion-card-main/",
            urlRepository: "https://github.com/mafernandezgo/faq-accordion-card-main.git"
        },
        {
            id:"3",
            name: "Space tourism multi page website",
            img: "/assets/SpaceTourism/spaceTourism4.jpg",
            tags: ["html y css", "react", "responsive"],
            imgCarousel: [ 
                "/assets/SpaceTourism/spaceTourism1.jpg", 
                "/assets/SpaceTourism/spaceTourism2.jpg",
                "/assets/SpaceTourism/spaceTourism3.jpg", 
                "/assets/SpaceTourism/spaceTourism4.jpg"
                ],
            urlDeploy: "https://mafernandezgo.github.io/Space-tourism-multi-page-website/#/",
            urlRepository: "https://github.com/mafernandezgo/Space-tourism-multi-page-website.git"
        },
        {
            id:"12",
            name: "Menu Restaurant",
            img: "/assets/MenuRestaurant/menuRestaurant1.jpg",
            imgCarousel: [ 
                "/assets/MenuRestaurant/menuRestaurant1.jpg", 
                "/assets/MenuRestaurant/menuRestaurant2.jpg",
                "/assets/MenuRestaurant/menuRestaurant3.jpg", 
                ],
            tags: ["javascript", "html y css"],
            urlDeploy: "https://mafernandezgo.github.io/Menu_JSVanilla/",
            urlRepository: "https://github.com/mafernandezgo/Menu_JSVanilla.git"
        },
        {
            id:"4",
            name: "Sunnyside Landing Page",
            img: "/assets/Sunnyside/Sunnyside1.jpg", 
            imgCarousel: [ 
                "/assets/Sunnyside/Sunnyside1.jpg", 
                "/assets/Sunnyside/Sunnyside2.jpg",
                "/assets/Sunnyside/Sunnyside3.jpg", 
                "/assets/Sunnyside/Sunnyside4.jpg",
                ],
            tags: ["react", "html y css"],
            urlDeploy: "https://mafernandezgo.github.io/sunnyside-agency-landing-page-main/",
            urlRepository: "https://github.com/mafernandezgo/sunnyside-agency-landing-page-main.git"
        },
        {
            id:"8",
            name: "Planner",
            img: "/assets/Planner/planner1.jpg",
            imgCarousel: [ 
                "/assets/Planner/planner1.jpg",
                "/assets/Planner/planner2.jpg",
            ],
            tags: ["javascript", "html y css"],
            urlDeploy: "https://mafernandezgo.github.io/Planeador_Glassmorphism/",
            urlRepository: "https://github.com/mafernandezgo/Planeador_Glassmorphism.git"
        },
        {
            id:"10",
            name: "Tip Calculator",
            img: "/assets/TipCalculator/tipCalculator1.jpg",
            imgCarousel: [ 
                "/assets/TipCalculator/tipCalculator1.jpg",
                "/assets/TipCalculator/tipCalculator2.jpg",
                "/assets/TipCalculator/tipCalculator3.jpg",
                ],
            tags: ["javascript", "html y css"],
            urlDeploy: "https://mafernandezgo.github.io/Tip-Calculator/",
            urlRepository: "https://github.com/mafernandezgo/Tip-Calculator.git"
        },
        {
            id:"6",
            name: "Singup Form",
            img: "/assets/SingUp/singUp2.jpg",
            imgCarousel: [ 
                "/assets/SingUp/singUp2.jpg",
                "/assets/SingUp/singUp1.jpg",
                "/assets/SingUp/singUp3.jpg"
            ],
            tags: ["html y css", "responsive"],
            urlDeploy: "https://mafernandezgo.github.io/intro-component-with-signup-form-master/",
            urlRepository: "https://github.com/mafernandezgo/intro-component-with-signup-form-master.git"
        },
        {
            id:"9",
            name: "Theme Switcher",
            img: "/assets/SwitchTheme/switchTheme1.jpg",
            imgCarousel: [ 
                "/assets/SwitchTheme/switchTheme1.jpg", 
                "/assets/SwitchTheme/switchTheme4.jpg",
                "/assets/SwitchTheme/switchTheme3.jpg", 
                "/assets/SwitchTheme/switchTheme2.jpg",
            ],
            tags: ["responsive","javascript", "html y css"],
            urlDeploy: "https://mafernandezgo.github.io/social-media-dashboard-with-theme-switcher-master/",
            urlRepository: "https://github.com/mafernandezgo/social-media-dashboard-with-theme-switcher-master.git"
        },
        
        {
            id:"1",
            name: "Weather App",
            img: "/assets/WeatherApp/desktop.jpg",
            tags: ["javascript", "api", "responsive"],
            imgCarousel: [ 
                "/assets/WeatherApp/desktop.jpg",
                "/assets/WeatherApp/mobile.jpg"
                ],
            urlDeploy: "https://mafernandezgo.github.io/weather/",
            urlRepository: "https://github.com/mafernandezgo/weather.git"
        },
        {
            id:"7",
            name: "Interactive Pricing",
            img: "/assets/InteractivePricing/interactivePricing1.jpg",
            imgCarousel: [ 
                "/assets/InteractivePricing/interactivePricing4.jpg",
                "/assets/InteractivePricing/interactivePricing1.jpg", 
                "/assets/InteractivePricing/interactivePricing3.jpg", 
                "/assets/InteractivePricing/interactivePricing2.jpg",
                ],
            tags: ["javascript", "responsive ","html y css"],
            urlDeploy: "https://mafernandezgo.github.io/interactive-pricing/",
            urlRepository: "https://github.com/mafernandezgo/interactive-pricing.git"
        }
        ,
        {
            id:"5",
            name: "Todo App",
            img: "/assets/TodoApp/todoApp2.jpg",
            imgCarousel: [ 
                "/assets/TodoApp/todoApp1.jpg", 
                "/assets/TodoApp/todoApp3.jpg", 
                "/assets/TodoApp/todoApp2.jpg",
                ],
            tags: ["react", "html y css", "responsive"],
            urlDeploy: "https://mafernandezgo.github.io/todoApp/",
            urlRepository: "https://github.com/mafernandezgo/todoApp.git"
        }
    ]

    const [btnFilter, setBtnFilter] = useState ("all")
    const tagsArray = data[0].tags


    function handlerFilter (e) {
        setBtnFilter(e.target.dataset.name)

    }
    console.log(btnFilter)

    // console.log(tagsArray.filter(handlerFilter))

    function test() {
        if(tagsArray.filter(handlerFilter)){
        console.log("aqui vamos")
    }}

    

    return(
        <section id="projects" className="projects">
            <Title name="projects"/>
            <div className="projectsMain">

                {/* <div className="btnsProjects">
                    <button onClick={handlerFilter } data-name="all" className="btnProjects neumorphism"> All</button>
                    <button onClick={handlerFilter } data-name="api" className="btnProjects neumorphism"> Api</button>
                    <button onClick={handlerFilter }  data-name="html y css" className="btnProjects neumorphism "> html & css</button>
                    <button onClick={handlerFilter } data-name="responsive" className="btnProjects neumorphism"> Responsive Design</button>
                    <button onClick={handlerFilter } data-name="javascript" className="btnProjects neumorphism"> Javascript</button>
                    <button onClick={handlerFilter } data-name="react" className="btnProjects neumorphism"> react</button>
                </div> */}
                <div>
                <div className="projectsGrid">
                    { data.map (x => {
                        return(
                            <CardProject key={x.id} 
                                        name={x.name} 
                                        img={x.img} 
                                        imgCarousel={x.imgCarousel} 
                                        urlDeploy={x.urlDeploy} 
                                        urlRepository={x.urlRepository} 
                                        tags={x.tags}
                            />
                    )
                    })}
        </div>
                </div>
            </div>
        </section>
    )
}

export default Projects