import styled from 'styled-components';

import { Form } from 'formik';
import { Button } from 'react-bootstrap';

export const StyledForm = styled(Form)`
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
`;

export const StyledBuyButton = styled(Button)`
  width: 100%;
  display: flex;
  column-gap: .75rem;
  align-items: center;
  justify-content: center;
`;
