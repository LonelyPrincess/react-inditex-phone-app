import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => (
  <header>
    <Container>
      <Row>
        <Col>
          <Link to="/">Mobile eShop</Link>
        </Col>
        <Col xs={3}>
          Cart items
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
