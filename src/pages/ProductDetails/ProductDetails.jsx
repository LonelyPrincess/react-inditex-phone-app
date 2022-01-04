import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  Row, Col, Table, Form,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons';

import {
  fetchProductDetails,
  selectLoading,
  selectProductDetails,
} from '../../state/productSlice';

import Loader from '../../components/Loader/Loader';

import {
  StyledLeftCol,
  StyledPriceTag,
  StyledBuyButton,
} from './ProductDetails.styled';

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const product = useSelector(selectProductDetails);

  useEffect(() => {
    if (!product || product.id !== productId) {
      dispatch(fetchProductDetails(productId));
    }
  }, [productId]);

  if (isLoading) {
    return (
      <Loader
        icon={faMobileAlt}
        message="Loading product details..."
      />
    );
  }

  if (!product) {
    return (
      <h1 data-cy="product-not-found-message">
        Product not found
      </h1>
    );
  }

  const productName = `${product.brand} ${product.model}`;
  return (
    <>
      <h1>{productName}</h1>
      <Row>
        <StyledLeftCol md={3}>
          <img alt={productName} src={product.imgUrl} />
          <StyledPriceTag>
            {product.price || '?'}
            €
          </StyledPriceTag>
          <section>
            <Form>
              <Form.Group controlId="productForm.colorSelector">
                <Form.Label>Color</Form.Label>
                <Form.Select>
                  {product.options.colors.map((color) => (
                    <option key={color.code} value={color.code}>{color.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="productForm.storageSelector">
                <Form.Label>Storage</Form.Label>
                <Form.Select>
                  {product.options.storages.map((storage) => (
                    <option key={storage.code} value={storage.code}>{storage.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Form>
            <StyledBuyButton variant="primary" size="lg">
              <FontAwesomeIcon icon={faCartPlus} />
              Add to cart
            </StyledBuyButton>
          </section>
        </StyledLeftCol>
        <Col>
          <Table bordered>
            <thead>
              <tr>
                <th colSpan={2}>Specifications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dimentions</td>
                <td>{product.dimentions}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{product.weight}</td>
              </tr>
              <tr>
                <td>Display type</td>
                <td>{product.displayType}</td>
              </tr>
              <tr>
                <td>Display size</td>
                <td>{product.displaySize}</td>
              </tr>
              <tr>
                <td>Display resolution</td>
                <td>{product.displayResolution}</td>
              </tr>
              <tr>
                <td>Operating system</td>
                <td>{product.os}</td>
              </tr>
              <tr>
                <td>CPU</td>
                <td>{product.cpu}</td>
              </tr>
              <tr>
                <td>Chipset</td>
                <td>{product.chipset}</td>
              </tr>
              <tr>
                <td>GPU</td>
                <td>{product.gpu}</td>
              </tr>
              <tr>
                <td>Speaker</td>
                <td>{product.speaker}</td>
              </tr>
              <tr>
                <td>Audio jack</td>
                <td>{product.audioJack}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
