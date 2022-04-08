// import gitHubIcon from "../../images/githug.svg"
// import allyPic from "./alleyTwentySix.jpg"
// import cocktail from "./cocktail.jpg"
// import readMe from "./readme.jpg"
// import myCalendar from "./mycalendar.jpg"

function Work(){
    return(
        <section id="work">

    <h2 class="section-title">Work</h2>
    <div class="project-list">
    <div class="project">
        <a href="https://fast-woodland-63027.herokuapp.com/">
        {/* <img class="image" src= {allyPic} width="575" height="350" alt="logo"/> */}
        </a>
        <h2>Alley 26</h2>
        <p>An app that allows the user to explore the many cocktails of Alley 26</p>
        <a href="https://github.com/polizoto/Prost_4.0"></a>
        {/* <img class="github-image" src= {gitHubIcon} alt="github icon"/> */}
    </div>
    <div class="project">
        <a href="https://mcnairjm.github.io/cocktail-app/">
        {/* <img class="image" src={cocktail} width="575" height="350" alt="logo"/> */}
        </a>
        <h2>Prost</h2>
        <p>An app that allows the user to search for cocktails</p>
        {/* <a href="https://github.com/mcnairjm/cocktail-app"> */}
        {/* <img class="github-image" src= {gitHubIcon} alt="github icon"/></a> */}
    </div>
    {/* <div>
        <a href="https://wofford-notetaker.herokuapp.com/">
        <img class="image" src={noteTaker} width="575" height="350"  alt="logo"/>
        </a>
        <h2>Note Taker</h2>
        <p>An app that allows the user to keep track of tasks with notes</p>
        <a href="https://github.com/woffordlm/express.js_Challenge_Note_Taker">
        <img class="github-image" src= {gitHubIcon} alt="github icon"/></a>
    </div>  */}
    <div class="project">
        <a href="https://github.com/woffordlm/pro-readme-generator">
        {/* <img class="image" src= {readMe} width="575" height="350" alt="logo"/> */}
        </a>
        <h2>ReadMe Generator</h2>
        <p>Create a custom readme</p>
        {/* <a href="https://github.com/woffordlm/pro-readme-generator"> */}
        {/* <img class="github-image" src= {gitHubIcon} alt="github icon"/></a> */}
    </div>
    <div class="project">
        <a href="https://woffordlm.github.io/my-calender/">
        {/* <img class="image" src={myCalendar} width="575" height="350" alt="logo"/> */}
        </a>
        <h2>My Calender</h2>
        <p>Keep track with you life with the My Calender App</p>
        {/* <a href="https://github.com/woffordlm/my-calender"> */}
        {/* <img class="github-image" src= {gitHubIcon} alt="github icon"/></a> */}
    </div>
    </div>
</section>

    )
}
export default Work





