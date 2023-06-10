import logo from './../Images/kb-logo.png';

export const NavHeader = () => {
    return (
        <div className="header-container">
            <a href="/">
                <img className="header-brand" src={logo} alt="Logo"></img>
            </a>
            <nav className="header-nav">
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/blogs">Blog</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );       
};