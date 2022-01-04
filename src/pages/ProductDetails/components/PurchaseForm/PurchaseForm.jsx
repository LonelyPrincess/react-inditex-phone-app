import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import {
  StyledBuyButton,
} from './PurchaseForm.styled';

const PurchaseForm = ({ product }) => {
  const [productFormValues, setProductFormValues] = useState({});

  useEffect(() => {
    if (!product) {
      return;
    }

    // Initialize form values with first options in the list
    setProductFormValues({
      color: product.options.colors[0].code,
      storage: product.options.storages[0].code,
    });
  }, [product]);

  const addProductToCart = () => {
    console.log({
      id: product.id,
      colorCode: productFormValues.color,
      storageCode: productFormValues.storage,
    });
  };

  return (
    <Form>
      <Form.Group controlId="productForm.colorSelector">
        <Form.Label>Color</Form.Label>
        <Form.Select
          value={productFormValues.color}
          onChange={(event) => setProductFormValues({
            ...productFormValues,
            color: +event.target.value,
          })}
        >
          {product.options.colors.map((color) => (
            <option key={color.code} value={color.code}>{color.name}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="productForm.storageSelector">
        <Form.Label>Storage</Form.Label>
        <Form.Select
          value={productFormValues.storage}
          onChange={(event) => setProductFormValues({
            ...productFormValues,
            storage: +event.target.value,
          })}
        >
          {product.options.storages.map((storage) => (
            <option key={storage.code} value={storage.code}>{storage.name}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <StyledBuyButton
        variant="primary"
        size="lg"
        type="submit"
        onClick={addProductToCart}
      >
        <FontAwesomeIcon icon={faCartPlus} />
        Add to cart
      </StyledBuyButton>
    </Form>
  );
};

PurchaseForm.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    options: PropTypes.shape({
      colors: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })).isRequired,
      storages: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })).isRequired,
    }).isRequired,
  }),
};

PurchaseForm.defaultProps = {
  product: null,
};

export default PurchaseForm;
