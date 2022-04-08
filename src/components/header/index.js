function Nav(){
    return(
        <header>
    <nav>
      <ul>
        <li>
          <a href="#aboutMe">About</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a  data-toggle="modal" class='.text-white' data-target=".bd-example-modal-xl">Resume</a>
        </li>
      </ul>
    </nav>
  </header>
    )
}
export default Nav

{/* <div>  
    <header>
      <nav>
        <ul>
          <li>
            <link to="/aboutMe">About</link>
          </li>
          <li>
            <link to="/work">Portfolio</link>
          </li>
          <li>
            <link href="/contact">Contact</link>
          </li>
          <li>
            <link
              data-toggle="modal"
              class=".text-white"
              data-target=".bd-example-modal-xl"
            >
              Resume
            </link>
          </li>
        </ul>
      </nav>
    </header>
  </div>   */}