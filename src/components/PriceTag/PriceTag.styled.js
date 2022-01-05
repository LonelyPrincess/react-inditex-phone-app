import styled from 'styled-components';

export const StyledPriceTag = styled.div`
  padding: .3rem 1rem;
  color: #ffffff;

  background: ${({ price }) => {
    if (!price) {
      return '#adb5bd';
    }

    if (price < 150) {
      return '#198754';
    }

    if (price > 250) {
      return '#dc3545';
    }

    return '#0d6efd';
  }};
`;
