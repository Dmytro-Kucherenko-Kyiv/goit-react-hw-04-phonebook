import styled from 'styled-components';

export const Form = styled.form`
  border: 3px solid ${p => p.theme.colors.text};
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const Label = styled.label`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const Input = styled.input`
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  color: ${p => p.theme.colors.text};
  border: 1mm solid ${p => p.theme.colors.text};
  border-radius: 20px;
  background-color: ${p => p.theme.colors.buttonColor};

  &:hover, &:focus{
    border-color: ${p => p.theme.colors.textAccent};
  }
`
export const SubmitButton = styled.button`
  font-size: 20px;
  padding: 5px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.buttonColor};
  border: 1mm solid ${p => p.theme.colors.text};
  border-radius: 20px;
  cursor:pointer;

  &:hover {
    color:  ${p => p.theme.colors.textAccent};
    background-color: ${p => p.theme.colors.text};
    border-color: ${p => p.theme.colors.textAccent};
  }
`