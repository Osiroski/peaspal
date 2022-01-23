import { Container, Nav } from 'react-bootstrap';
import './header.css';
const Headernav = () => {
    return (
        <header id="header" >
            <Container className="d-flex align-items-center justify-content-between">
                <h1 className="logo">Techie</h1>

                {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}

                <Nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li className="dropdown"><a href="/"><span>Applications</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#services">Implementing a Secure Webserver</a></li>
                                <li><a href="#features">Re-routing/forwarding communication.</a></li>
                                <li><a href="#faq">Dictionary Webscrapping</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#services">Web Server</a></li>
                        <li><a className="nav-link scrollto" href="#features">Communication</a></li>
                        <li><a className="nav-link scrollto" href="#faq">Scrapping</a></li>
                        
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </Nav>

            </Container>
        </header>
    )
}

export default Headernav
