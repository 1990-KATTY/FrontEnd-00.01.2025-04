import React, { useState, useEffect } from "react";
import { Form, Button, Card, Container, Row, Col, Alert } from "react-bootstrap";

function Contactos() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    correo: "",
    mensaje: "",
  });
  const [success, setSuccess] = useState(false);

  // Recuperar datos guardados al cargar
  useEffect(() => {
    const savedData = localStorage.getItem("contactoForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Solo letras para nombre y apellido
    if (name === "nombre" || name === "apellido") {
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value)) return;
    }

    // Solo números para celular
    if (name === "celular") {
      if (!/^\d*$/.test(value)) return;
    }

    setFormData({ ...formData, [name]: value });
    localStorage.setItem(
      "contactoForm",
      JSON.stringify({ ...formData, [name]: value })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    // Limpiar formulario y LocalStorage
    setFormData({
      nombre: "",
      apellido: "",
      celular: "",
      correo: "",
      mensaje: "",
    });
    localStorage.removeItem("contactoForm");

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Contáctanos</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Ingresa tu apellido"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Celular</Form.Label>
                  <Form.Control
                    type="text"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    placeholder="Ingresa tu número de celular"
                    maxLength="9"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="Ingresa tu correo"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="mensaje"
                    rows={3}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje"
                    required
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                  Enviar
                </Button>

                {success && (
                  <Alert variant="success" className="mt-3 text-center">
                    ✅ ¡Tu mensaje fue enviado con éxito!
                  </Alert>
                )}
              </Form>
            </Card.Body>
          </Card>

          {/* Tabla con datos de contacto */}
          <h4 className="mt-4">Datos de la empresa</h4>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Teléfono</th>
                <td>+51 999 888 777</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>contacto@miempresa.com</td>
              </tr>
              <tr>
                <th>Dirección</th>
                <td>Av. Ejemplo 123, Lima, Perú</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
}

export default Contactos;
