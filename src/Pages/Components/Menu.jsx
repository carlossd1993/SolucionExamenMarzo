import {Navbar, Container, Nav} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

function Menu(){

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="./Home">Museo del prado</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="./">Home</Nav.Link>
                        <Nav.Link href="./Obras">Obras</Nav.Link>
                        <Nav.Link href="./Contacto">Contacto</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Menu