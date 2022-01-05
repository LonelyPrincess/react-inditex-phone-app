import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import {
  StyledPriceTag,
  StyledProductListItem,
} from './ProductListItem.styled';

const ProductListItem = ({ product }) => {
  const navigate = useNavigate();

  const productName = `${product.brand} ${product.model}`;

  return (
    <StyledProductListItem
      key={product.id}
      data-cy="product-list-item"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <img
        alt={productName}
        src={product.imgUrl}
      />
      <span>{productName}</span>
      <StyledPriceTag value={product.price} />
    </StyledProductListItem>
  );
};

ProductListItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.string,
  }).isRequired,
};

export default ProductListItem;
