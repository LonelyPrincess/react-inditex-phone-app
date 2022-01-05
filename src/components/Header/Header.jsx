import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import {
  StyledHeader,
  StyledTitle,
  StyledCartContainer,
  StyledBadge,
} from './Header.styled';

const Header = () => (
  <StyledHeader>
    <StyledTitle>
      <Link to="/">Mobile eShop</Link>
    </StyledTitle>
    <StyledCartContainer>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      <StyledBadge pill bg="primary">2</StyledBadge>
    </StyledCartContainer>
  </StyledHeader>
);

export default Header;
