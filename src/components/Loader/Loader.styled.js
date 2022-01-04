import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  align-items: center;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: #0d6efd;
`;

export const StyledMessage = styled.div`
  font-size: larger;
`;
