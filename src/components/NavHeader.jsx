import profile from '../Images/profile-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

export const NavHeader = () => {
	return (
		<nav className="navbar navbar-expand-lg" id="header">
			<div className="container-sm">
				<a className="navbar-brand" target="_blank" rel="noreferrer" href='/'>
					<img src={profile} alt="Profile" id="profileImage" />
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
					<span className="navbar-toggler-icon">Menu</span>
				</button>
				<div className="collapse navbar-collapse" id="navbarToggler">
					<div className="navbar-nav">
						<a className="nav-link px-3" href="/about">ABOUT</a>
						<a className="nav-link px-3" href="/projects">PROJECTS</a>
						<a className="nav-link px-3" href="/blogs">BLOG</a>
						<a className="nav-link px-3" href="/Contact">CONTACT</a>
					</div>
				</div>
				<div className="d-inline-flex">
					<a className="navbar-brand" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/karla-bucoy/">
						<FontAwesomeIcon icon={faLinkedin} id="socialImage" alt="LinkedIn profile" />
					</a>
					<a className="navbar-brand" target="_blank" rel="noreferrer" href="https://github.com/KarlaB3">
						<FontAwesomeIcon icon={faGithub} id="socialImage" alt="GitHub profile" />
					</a>
				</div>
      </div>
		</nav>
	)
}