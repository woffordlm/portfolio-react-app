function Nav(props){
console.log('props:', props)
// const {
//   setCurrentTab,
//   currentTab
// } = props;

const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return(
      <>
      <header>
        <nav>
          <ul>
          {tabs.map((tab) => (
          <li
            className={
              props.currentTab === tab ? "navActive" : "nav-item"
            }
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.setCurrentTab(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>

          ))}
          
              
          </ul>
        </nav>
      </header>
      </>
    )
          }



{/* 
        <li>
          <a  href="#aboutMe">About</a>
        </li>
        <li>
          <a onClick={tabSelected} href="#work">Work</a>
        </li>
        <li>
          <a onClick={tabSelected} href="#contact">Contact</a>
        </li>
        <li>
          <a href="blank" data-toggle="modal" class='.text-white' data-target=".bd-example-modal-xl">Resume</a>
        </li>
      </ul>
    </nav>
  </header> */}

export default Nav
