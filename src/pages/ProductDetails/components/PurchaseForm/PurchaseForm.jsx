import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { Formik, Form as FormikForm, Field } from 'formik';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import {
  selectLoading,
  addProductToCart as addProductToCartAction,
} from '../../../../state/productSlice';

import {
  StyledBuyButton,
} from './PurchaseForm.styled';

const PurchaseForm = ({ product }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  // Initialize form values with first options in the list
  const initialFormValues = useMemo(() => ({
    color: product?.options.colors[0].code,
    storage: product?.options.storages[0].code,
  }), [product]);

  const addProductToCart = (values) => {
    dispatch(
      addProductToCartAction({
        productId: product.id,
        colorCode: +values.color,
        storageCode: +values.storage,
      }),
    );
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={addProductToCart}
    >
      <FormikForm>
        <Field name="color">
          {({ field }) => (
            <Form.Group controlId="purchaseForm.colorSelector">
              <Form.Label>Color</Form.Label>
              <Form.Select {...field}>
                {product.options.colors.map((color) => (
                  <option key={color.code} value={color.code}>{color.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          )}
        </Field>
        <Field name="storage">
          {({ field }) => (
            <Form.Group controlId="purchaseForm.storageSelector">
              <Form.Label>Storage</Form.Label>
              <Form.Select {...field}>
                {product.options.storages.map((storage) => (
                  <option key={storage.code} value={storage.code}>{storage.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          )}
        </Field>
        <StyledBuyButton
          data-cy="add-to-shopping-cart-button"
          disabled={isLoading}
          variant="primary"
          size="lg"
          type="submit"
        >
          <FontAwesomeIcon icon={faCartPlus} />
          Add to cart
        </StyledBuyButton>
      </FormikForm>
    </Formik>
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
