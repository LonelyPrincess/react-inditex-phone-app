import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Row, Col } from 'react-bootstrap';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import {
  fetchProductDetails,
  selectLoading,
  selectProductDetails,
} from '../../state/productSlice';

import Loader from '../../components/Loader/Loader';

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
        <Col>
          <img alt={productName} src={product.imgUrl} />
        </Col>
        <Col>
          hehe
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
