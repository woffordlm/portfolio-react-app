import lukePic from '../../images/IMG_7672.jpg';

function About(){
    return(
        <main>
            <section id="aboutMe" className="aboutMe">
            <div className="image-bio">
                <div className="bio-1">
                <div className="picture-border">
                {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}

                    <img src={lukePic} className="luke" alt="picture of luke wofford" />
                </div>
                <p><strong>Name: </strong>Luke Wofford <br/>
                    <strong>Position:</strong> Farm Manager <br/>
                    <strong>Education:</strong> B.S. Sustainable Development,
                    UNC Coding Bootcamp
                    <br/>
                </p>
                </div>
                <div className="bio-2">
                <div className="flex-row">
                    <h2 className="section-title ">About Me</h2>
                </div>
                <p> I am currently enrolled in the UNC Coding bootcamp and have been
                    working with <strong> Javascript, HTML, CSS, JQuery, Express, MySQl, Git, Sequelize, Database theory, Mongo
                    DB, Agile Methodology,
                    Progressive Web Apps and React.js</strong>.
                </p>
                <br/>
                GithHub: <a href="https://github.com/woffordlm">Checkout my work on github!</a>
                <br/>
                <br/>
                {/* <hr className="hr-style"> */}
                <br/>
                <p>
                    When I am not busy at work, I spend my time outside
                    either working in my greenhouses, attempting to play old-time fiddle, or out on a hike. I also run a CSA
                    veggie box operation on my farm outside of Winston-Salem.
                    <br/>
                    <br/>
                    <a href="https://www.starbrightfarmnc.com/">Check out the farm!</a>
                </p>
                </div>
            </div>
            </section>
        </main>
    )
};
export default About