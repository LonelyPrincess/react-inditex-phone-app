import styled from 'styled-components';

import PriceTag from '../../../../components/PriceTag/PriceTag';

export const StyledProductListItem = styled.li`
  border: 1px solid #ced4da;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: .25rem;
  position: relative;
  text-align: center;
`;

export const StyledPriceTag = styled(PriceTag)`
  position: absolute;
  top: 0;
  right: 0;
`;
