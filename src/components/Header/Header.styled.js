import styled from 'styled-components';
import { Badge } from 'react-bootstrap';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  background: #e9ecef;
  box-shadow: 0 0 0.5rem #6c757d;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled.h3`
  margin: 0;

  a {
    outline: none;
    text-decoration: none;
  }
`;

export const StyledCartContainer = styled.div`
  padding: 0 .75rem;
  position: relative;
`;

export const StyledBadge = styled(Badge)`
  position: absolute;
  bottom: -.25rem;
  right: -.25rem;
`;
