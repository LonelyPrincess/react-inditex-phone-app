import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  Breadcrumb, Row, Col, Table,
} from 'react-bootstrap';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import {
  fetchProductDetails,
} from '../../state/actions/product';
import {
  selectLoading,
  selectProductDetails,
} from '../../state/selectors/product';

import Loader from '../../components/Loader/Loader';
import PurchaseForm from './components/PurchaseForm/PurchaseForm';

import {
  StyledMain,
  StyledTitle,
  StyledLeftCol,
  StyledPriceTag,
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

  if (isLoading && (!product || product.id !== productId)) {
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
      <Breadcrumb>
        <Breadcrumb.Item
          data-cy="breadcrumb-home-link"
          linkProps={{ to: '/' }}
          linkAs={Link}
        >
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Product details
        </Breadcrumb.Item>
      </Breadcrumb>
      <StyledMain>
        <StyledTitle data-cy="product-name">
          {productName}
        </StyledTitle>
        <Row>
          <StyledLeftCol md={3}>
            <img alt={productName} src={product.imgUrl} />
            <StyledPriceTag value={product.price} />
            <PurchaseForm product={product} />
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
      </StyledMain>
    </>
  );
};

export default ProductDetails;
