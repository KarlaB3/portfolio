import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

export const NavFooter = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-xxl">
        <p className="navbar-text" id="footer-text">© KB Dev 2023. Illustrations by <a href="https://www.declanmooreart.com/">Declan Moore.</a></p>
      </div>
    </nav>
  );       
};