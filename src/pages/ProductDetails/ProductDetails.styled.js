import styled from 'styled-components';
import { Button, Col } from 'react-bootstrap';

export const StyledMain = styled.main`
  margin: 1rem 0 2rem 0;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 2rem;
`;

export const StyledLeftCol = styled(Col)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: relative;
`;

export const StyledPriceTag = styled.div`
  padding: .3rem 1rem;
  color: #ffffff;
  background: #0d6efd;
  position: absolute;
  top: 0;
  right: 0;
`;

export const StyledBuyButton = styled(Button)`
  width: 100%;
  display: flex;
  column-gap: .75rem;
  align-items: center;
  justify-content: center;
`;
