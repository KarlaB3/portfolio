import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

export const NavFooter = () => {
    return (
        <div className="footer-container">
            <nav className="footer-nav">
                <a className="footer-socials" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/karla-bucoy/">
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" alt="LinkedIn profile" />
                </a>
                <a className="footer-socials" target="_blank" rel="noreferrer" href="https://github.com/KarlaB3">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" alt="GitHub profile" />
                </a>
            </nav>
        </div>
    );       
};