import styled from 'styled-components';

export const StyledProductList = styled.ul`
  padding: 0;
  margin: 1rem 0;
  list-style: none;

  display: grid;
  grid-auto-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  @media only screen and (max-width: 1000px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fill, max(200px, 100%/4 - .75rem));
  }
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

export const StyledProductCount = styled.p`
  margin: 1rem;
  text-align: center;
`;
