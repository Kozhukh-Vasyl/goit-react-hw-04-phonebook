import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

const StyledFormik = styled(Formik)`
  display: flex;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  display: block;
  margin-right: auto;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1.5px solid #ccc;

  &:focus {
    outline: none;
    border-color: #afbd4b;
  }
`;

export { StyledFormik, StyledForm, StyledLabel, StyledField };
