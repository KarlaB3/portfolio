import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

export const NavFooter = () => {
  return (
    <nav className="navbar fixed-bottom navbar-expand-lg">
      <div className="container-xxl">
        <a className="navbar-brand" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/karla-bucoy/">
          <FontAwesomeIcon icon={faLinkedin} id="footerImage" alt="LinkedIn profile" />
        </a>
        <a className="navbar-brand" target="_blank" rel="noreferrer" href="https://github.com/KarlaB3">
          <FontAwesomeIcon icon={faGithub} id="footerImage" alt="GitHub profile" />
        </a>
      </div>
    </nav>
  );       
};