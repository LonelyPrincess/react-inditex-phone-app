import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { Formik, Field } from 'formik';
import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faFillDrip, faSdCard } from '@fortawesome/free-solid-svg-icons';

import {
  addProductToCart as addProductToCartAction,
} from '../../../../state/actions/product';
import { selectLoading } from '../../../../state/selectors/product';

import {
  StyledForm,
  StyledLabel,
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
      <StyledForm>
        <Field name="color">
          {({ field }) => (
            <Form.Group controlId="purchaseForm.colorSelector">
              <StyledLabel>Color</StyledLabel>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon fixedWidth icon={faFillDrip} />
                </InputGroup.Text>
                <Form.Select {...field}>
                  {product.options.colors.map((color) => (
                    <option key={color.code} value={color.code}>{color.name}</option>
                  ))}
                </Form.Select>
              </InputGroup>
            </Form.Group>
          )}
        </Field>
        <Field name="storage">
          {({ field }) => (
            <Form.Group controlId="purchaseForm.storageSelector">
              <StyledLabel>Storage</StyledLabel>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon fixedWidth icon={faSdCard} />
                </InputGroup.Text>
                <Form.Select {...field}>
                  {product.options.storages.map((storage) => (
                    <option key={storage.code} value={storage.code}>{storage.name}</option>
                  ))}
                </Form.Select>
              </InputGroup>
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
      </StyledForm>
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
