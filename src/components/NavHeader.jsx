import logo from './../Images/kb-logo.png';

export const NavHeader = () => {
    return (
        <div class="container">
            <nav class="navbar navbar-expand-xl navbar-light bg-light">
                <a class="navbar-brand" href="/">
                    <img src={logo} width="50" height="50" alt="KB dev logo"></img>
                </a>
                    <div class="navbar-nav">
                    <a class="nav-item nav-link" href="/about">About</a>
                    <a class="nav-item nav-link" href="/projects">Projects</a>
                    <a class="nav-item nav-link" href="/blogs">Blog</a>
                    <a class="nav-item nav-link" href="/contact">Contact</a>
                    </div>
            </nav>
        </div>
    );       
};