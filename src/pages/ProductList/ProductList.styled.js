import styled from 'styled-components';

export const StyledProductList = styled.ul`
  padding: 0;
  margin: 1rem 0;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

export const StyledProductListItem = styled.li`
  flex-basis: 20%;
  border: 1px solid #ced4da;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: .25rem;
  position: relative;
`;

export const StyledProductListItemPrice = styled.div`
  padding: .3rem 1rem;
  color: #ffffff;
  background: #0d6efd;
  position: absolute;
  top: 0;
  right: 0;
`;
