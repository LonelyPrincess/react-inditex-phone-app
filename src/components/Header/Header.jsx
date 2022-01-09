import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { selectShoppingCartItemCount } from '../../state/selectors/product';

import {
  StyledHeader,
  StyledTitle,
  StyledCartContainer,
  StyledBadge,
} from './Header.styled';

const Header = () => {
  const itemsInCart = useSelector(selectShoppingCartItemCount);

  return (
    <StyledHeader>
      <StyledTitle>
        <Link to="/">Mobile eShop</Link>
      </StyledTitle>
      <StyledCartContainer>
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        <StyledBadge pill bg="primary" data-cy="shopping-cart-item-count">
          {itemsInCart}
        </StyledBadge>
      </StyledCartContainer>
    </StyledHeader>
  );
};

export default Header;
