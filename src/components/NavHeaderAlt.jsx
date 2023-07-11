import profile from '../Images/profile-img.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faGithub} from '@fortawesome/free-brands-svg-icons'

export const NavHeaderAlt = () => {
return (
  <nav className="navbar navbar-expand-lg navbar-light" id="header">
    <div className="container px-4">
      <a className="navbar-brand"  href="/">
        <img src={profile} alt="Karla Profile Home" id="profileImage"></img>
      </a>
      <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link px-3" href="/about">ABOUT</a></li>
          <li className="nav-item"><a className="nav-link px-3" href="/projects">PROJECTS</a></li>
          <li className="nav-item"><a className="nav-link px-3" href="/blogs">BLOG</a></li>
          <li className="nav-item"><a className="nav-link pe-0" href="/contact">CONTACT</a></li>
        </ul>
      </div>
    </div>
  </nav>
)
}