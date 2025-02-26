import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Auth from "../Auth/Auth";
import { useNavbarStore } from "../../stores/navbarStore";

function NavBar() {
  const noPositionNavbar = useNavbarStore((state) => state.noPositionNavbar);

  return (
    <Navbar
      className={`py-4 ${styles.navbarBody} ${noPositionNavbar ? styles.noPosition : ""}`}
      expand="sm"
      sticky="top"
    >
      <Container>
        <Navbar.Brand className={styles.title} as={Link} to="/">
          My Notes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="primary-navbar" />
        <Navbar.Collapse id="primary-navbar">
          <Nav className={styles.navBody}>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/privacy">
              Privacy
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Auth />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
