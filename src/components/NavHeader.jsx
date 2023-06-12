import logo from './../Images/kb-logo.png';

export const NavHeader = () => {
		return (
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						<img src={logo} width="50" height="50" alt="KB Dev logo"></img>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
						<span className="navbar-toggler-icon">Menu</span>
					</button>
					<div className="collapse navbar-collapse" id="navbarToggler">
						<div className="navbar-nav">
							<a className="nav-link" href="/about">About</a>
							<a className="nav-link" href="/projects">Projects</a>
							<a className="nav-link" href="/blogs">Blog</a>
							<a className="nav-link" href="/Contact">Contact</a>
						</div>
					</div>
				</div>
			</nav>
		)
}