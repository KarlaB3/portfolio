import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

export const NavHeader = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-sm">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
					<span className="navbar-toggler-icon">Menu</span>
				</button>
				<div className="collapse navbar-collapse" id="navbarToggler">
					<div className="navbar-nav">
						<a className="nav-link" href="/">KB</a>
						<a className="nav-link" href="/about">About</a>
						<a className="nav-link" href="/projects">Projects</a>
						<a className="nav-link" href="/blogs">Blog</a>
						<a className="nav-link" href="/Contact">Contact</a>
					</div>
				</div>
				<div className="d-inline-flex">
					<a className="navbar-brand" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/karla-bucoy/">
						<FontAwesomeIcon icon={faLinkedin} id="footerImage" alt="LinkedIn profile" />
					</a>
					<a className="navbar-brand" target="_blank" rel="noreferrer" href="https://github.com/KarlaB3">
						<FontAwesomeIcon icon={faGithub} id="footerImage" alt="GitHub profile" />
					</a>
				</div>
      </div>
		</nav>
	)
}