import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'

export const NavHeader = () => {
    return (
        <Navbar bg="light" variant="light">
            <NavbarBrand href='/'>My Logo</NavbarBrand>
            <Nav>
                <NavItem href="/about">About</NavItem>
                <NavItem href="/projects">Projects</NavItem>
                <NavItem href="/blog">Blog</NavItem>
                <NavItem href="/contact">Contact</NavItem>
            </Nav>
        </Navbar>
    );
}