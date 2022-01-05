import styled from 'styled-components';
import { Button, Col } from 'react-bootstrap';

import PriceTag from '../../components/PriceTag/PriceTag';

export const StyledMain = styled.main`
  margin: 1rem 0;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 2rem;
`;

export const StyledLeftCol = styled(Col)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: relative;
  padding: 1rem 0;
`;

export const StyledPriceTag = styled(PriceTag)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
  padding: .5rem 1.25rem;
`;

export const StyledBuyButton = styled(Button)`
  width: 100%;
  display: flex;
  column-gap: .75rem;
  align-items: center;
  justify-content: center;
`;
