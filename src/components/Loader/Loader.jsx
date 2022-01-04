import React from 'react';
import PropTypes from 'prop-types';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import {
  StyledContainer,
  StyledIcon,
  StyledMessage,
} from './Loader.styled';

const Loader = ({ icon, message }) => (
  <StyledContainer>
    <StyledIcon icon={icon} size="6x" spin />
    <StyledMessage>{message}</StyledMessage>
  </StyledContainer>
);

Loader.propTypes = {
  icon: PropTypes.string,
  message: PropTypes.string,
};

Loader.defaultProps = {
  icon: faSpinner,
  message: 'Loading...',
};

export default Loader;
