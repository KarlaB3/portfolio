import logo from './../Images/kb-logo.png';

export const NavHeader = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={logo} width="50" height="50" alt="KB dev logo"></img>
                </a>
                    <div class="navbar-nav">
                    <a className="nav-item nav-link" href="/about">About</a>
                    <a className="nav-item nav-link" href="/projects">Projects</a>
                    <a className="nav-item nav-link" href="/blogs">Blog</a>
                    <a className="nav-item nav-link" href="/contact">Contact</a>
                    </div>
            </nav>
        </div>
    );       
};