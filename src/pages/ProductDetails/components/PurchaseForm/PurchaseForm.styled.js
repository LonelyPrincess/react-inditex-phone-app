import styled from 'styled-components';

import { Form as FormikForm } from 'formik';
import { Button, Form } from 'react-bootstrap';

export const StyledForm = styled(FormikForm)`
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
`;

export const StyledLabel = styled(Form.Label)`
  color: #6C7583;
  margin-bottom: .25rem;
`;

export const StyledBuyButton = styled(Button)`
  width: 100%;
  display: flex;
  column-gap: .75rem;
  align-items: center;
  justify-content: center;
`;
