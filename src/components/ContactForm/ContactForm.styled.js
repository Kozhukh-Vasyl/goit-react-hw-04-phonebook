import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-bottom: 40px;

  color: #2f4f4f;
`;

export const TitleForm = styled.h2`
  font-size: 24px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const ButtonForm = styled.button`
  border-radius: 4px;
  border: 0.5px solid transparent;
  display: block;
  min-width: 160px;

  color: #1D513E;
  background-color: #f4fcf2;
  font-family: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: calc(30 / 16);
  letter-spacing: 0.06em;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 8px 16px;

  &:hover {
    background-color: #A3DFC6;
  }
`;

export const Label = styled.label`
  display: block;

  font-size: 16px;
  line-height: calc(30 / 16);
`;

export const Input = styled.input`
  padding: 12px 12px 12px 12px;

  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #1D513E;
  }
`;
