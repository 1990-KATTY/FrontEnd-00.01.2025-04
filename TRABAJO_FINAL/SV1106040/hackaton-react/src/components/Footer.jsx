import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaTshirt, FaShoppingBag } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a", color: "#ccc", padding: "20px 0", marginTop: "40px" }}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Redes Sociales */}
          <Col md={4} className="mb-3 mb-md-0">
            <h5 style={{ color: "#fff" }}>Síguenos</h5>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: "#ccc", marginRight: "15px", fontSize: "1.5rem" }}>
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: "#ccc", marginRight: "15px", fontSize: "1.5rem" }}>
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: "#ccc", fontSize: "1.5rem" }}>
              <FaTwitter />
            </a>
          </Col>

          {/* Descripción */}
          <Col md={4} className="mb-3 mb-md-0">
            <h5 style={{ color: "#fff" }}>APP & ROPA</h5>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              Tu tienda de moda online con la mejor calidad y precio.  
              ¡Compra fácil, rápido y seguro!
            </p>
          </Col>

          {/* Enlaces o productos */}
          <Col md={4}>
            <h5 style={{ color: "#fff" }}>Productos Populares</h5>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "0.9rem", margin: 0 }}>
              <li><FaTshirt style={{ marginRight: "5px" }} /> Ropa de Damas</li>
              <li><FaShoppingBag style={{ marginRight: "5px" }} /> tecnología </li>
              <li><FaShoppingBag style={{ marginRight: "5px" }} /> Accesorios</li>
              <li><FaTshirt style={{ marginRight: "5px" }} /> Ropa de hombres </li>
            </ul>
          </Col>
        </Row>

        <hr style={{ backgroundColor: "#555" }} />

        <Row>
          <Col className="text-center" style={{ fontSize: "0.85rem", color: "#777" }}>
            © {new Date().getFullYear()} APP & ROPA - Todos los derechos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

