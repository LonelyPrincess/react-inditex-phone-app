import React from 'react';
import PropTypes from 'prop-types';

import { StyledPriceTag } from './PriceTag.styled';

const PriceTag = ({ className, value }) => (
  <StyledPriceTag
    className={className}
    price={+value}
  >
    {`${value || '-'} €`}
  </StyledPriceTag>
);

PriceTag.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
};

PriceTag.defaultProps = {
  className: null,
  value: '-',
};

export default PriceTag;
