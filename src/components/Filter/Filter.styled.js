import styled from "styled-components";

export const LabelWrap = styled.div`
  margin: 20px auto;
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