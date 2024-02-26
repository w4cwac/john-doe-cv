import React from "react";
import Bootstrap from 'bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Style/header.css";
import favicon from '../img/favicon.png';





export default function header(){

    const handleClick = event => {
        // 👇️ toggle class on click
        event.currentTarget.classList.toggle('active');
    };

    const texte2 ={
        color: "#444",
        testDecoration: "none",
        fontFamily: "Nunito Sans"
    }



    return(
        <div className="App">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
            <Navbar data-bs-theme="light"  expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img src={favicon}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link className="link fs-5 text me-4 text-uppercase" href="/" onClick={handleClick} style={texte2}>Accueil</Nav.Link>
                            <Nav.Link className="link fs-5 text me-4 text-uppercase" href="/services" onClick={handleClick} style={texte2}>Services</Nav.Link>
                            <Nav.Link className="link fs-5 text me-4 text-uppercase" href="/realisation" onClick={handleClick} style={texte2}>Réalisations</Nav.Link>
                            <Nav.Link className="link fs-5 text me-4 text-uppercase" href="/blog" onClick={handleClick} style={texte2}>Blog</Nav.Link>
                            <Nav.Link className="link fs-5 text me-4 text-uppercase" href="/contact" onClick={handleClick} style={texte2}>Me Contacter</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        </div>
    )
}