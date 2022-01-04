import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import {
  StyledContainer,
} from './Loader.styled';

const Loader = ({ icon, message }) => (
  <StyledContainer>
    <FontAwesomeIcon icon={icon} size="6x" spin />
    <p>{message}</p>
  </StyledContainer>
);

Loader.propTypes = {
  icon: PropTypes.string,
  message: PropTypes.string,
};

Loader.defaultProps = {
  icon: faMobileAlt,
  message: 'Loading...',
};

export default Loader;
