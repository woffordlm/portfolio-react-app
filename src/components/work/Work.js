import gitHubIcon from "../../images/github.svg"

import allyPic from "../../images/alleyTwentySix.jpg"
import cocktail from "../../images/cocktail.jpg"
import readMe from "../../images/readme.jpg"
import myCalendar from "../../images/mycalendar.jpg"

function Work(){
    return(
        <section id="work">

    <h2 className="section-title">Work</h2>
    <div className="project-list">
    <div className="project">
        <a href="https://fast-woodland-63027.herokuapp.com/">
        <img className="image" src= {allyPic} width="383" height="233" alt="logo"/>
        </a>
        <h2>Alley 26</h2>
        <p>An app that allows the user to explore the many cocktails of Alley 26</p>
        <a href="https://github.com/polizoto/Prost_4.0">
        <img className="github-image" src= {gitHubIcon} alt="github icon"/></a>
    </div>
    <div className="project">
        <a href="https://mcnairjm.github.io/cocktail-app/">
        <img className="image" src={cocktail} width="383" height="233" alt="logo"/>
        </a>
        <h2>Prost</h2>
        <p>An app that allows the user to search for cocktails</p>
        <a href="https://github.com/mcnairjm/cocktail-app">
        <img className="github-image" src= {gitHubIcon} alt="github icon"/></a>
    </div>
    {/* <div>
        <a href="https://wofford-notetaker.herokuapp.com/">
        <img className="image" src={noteTaker} width="383" height="233"  alt="logo"/>
        </a>
        <h2>Note Taker</h2>
        <p>An app that allows the user to keep track of tasks with notes</p>
        <a href="https://github.com/woffordlm/express.js_Challenge_Note_Taker">
        <img className="github-image" src= {gitHubIcon} alt="github icon"/></a>
    </div>  */}
    <div className="project">
        <a href="https://github.com/woffordlm/pro-readme-generator">
        <img className="image" src= {readMe} width="383" height="233" alt="logo"/>
        </a>
        <h2>ReadMe Generator</h2>
        <p>Create a custom readme</p>
        <a href="https://github.com/woffordlm/pro-readme-generator">
        <img className="github-image" src= {gitHubIcon} alt="github icon"/></a>
    </div>
    <div className="project">
        <a href="https://woffordlm.github.io/my-calender/">
        <img className="image" src={myCalendar} width="383" height="233" alt="logo"/>
        </a>
        <h2>My Calender</h2>
        <p>Keep track with you life with the My Calender App</p>
        <a href="https://github.com/woffordlm/my-calender">
        <img className="github-image" src= {gitHubIcon} alt="github icon"/></a> 
    </div>
    </div>
</section>

    )
}
export default Work





