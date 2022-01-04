import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header>
    <Row>
      <Col>
        <Link to="/">Mobile eShop</Link>
      </Col>
      <Col xs={2}>
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        <Badge pill bg="primary">2</Badge>
      </Col>
    </Row>
  </header>
);

export default Header;
