import { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext'; // Importamos UserContext

const MyNavbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); // Obtenemos token y logout

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-4">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Pizzería Mamma Mía!
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex flex-column flex-lg-row gap-2 my-2 my-lg-0 w-100 align-lg-items-center">
            <Link
              to="/"
              className="btn text-white border border-secondary text-start text-lg-center px-3 py-2"
              style={{ backgroundColor: 'transparent' }}
            >
              🍕 Home
            </Link>

            {token ? (
              <>
                <Link
                  to="/profile"
                  className="btn text-white border border-secondary text-start text-lg-center px-3 py-2"
                  style={{ backgroundColor: 'transparent' }}
                >
                  🔓 Profile
                </Link>
                <button
                  onClick={logout}
                  className="btn text-white border border-secondary text-start text-lg-center px-3 py-2"
                  style={{ backgroundColor: 'transparent' }}
                >
                  🔒 Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn text-white border border-secondary text-start text-lg-center px-3 py-2"
                  style={{ backgroundColor: 'transparent' }}
                >
                  🔐 Login
                </Link>
                <Link
                  to="/register"
                  className="btn text-white border border-secondary text-start text-lg-center px-3 py-2"
                  style={{ backgroundColor: 'transparent' }}
                >
                  🔐 Register
                </Link>
              </>
            )}
          </Nav>

          <Nav className="mt-2 mt-lg-0">
            <Link
              to="/cart"
              className="btn text-white border border-info px-3 py-2 text-start text-lg-center"
              style={{ backgroundColor: 'transparent' }}
            >
              🛒 Total: ${total.toLocaleString()}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;