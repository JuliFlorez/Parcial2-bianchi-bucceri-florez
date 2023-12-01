import React, { useState, useCallback } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../services/auth.service";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChangeUserName = useCallback((e) => {
    setUserName(e.target.value);
  }, [setUserName]);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, [setPassword]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      login({ userName, password })
        .then(({ cuenta, token }) => {
          localStorage.setItem("token", token);
          navigate("/", { replace: true });
        })
        .catch((err) => setError(err.error.message));
    },
    [userName, password, navigate, setError]
  );

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <Form onSubmit={onSubmit}>
            <h1>Iniciar Sesión</h1>
            <Form.Group controlId="formUserName">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre de usuario"
                value={userName}
                onChange={onChangeUserName}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={onChangePassword}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Ingresar
            </Button>

            <p>{error}</p>

            <p>
              ¿No tienes una cuenta?{" "}
              <Link to="/register">Regístrate aquí.</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
