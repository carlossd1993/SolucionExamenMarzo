import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function Menu(){

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="./Home">Museo del prado</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="./">Home</Link>
                        <Link className="nav-link" to="./Obras">Obras</Link>
                        <Link className="nav-link" to="./Contacto">Contacto</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Menu