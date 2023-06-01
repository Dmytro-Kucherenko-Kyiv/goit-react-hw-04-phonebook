import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-size: 30px;
`
export const ItemStyle = styled.span`
  display: list-item;
  list-style-type: '👉';
  padding-inline-start: 1ch;
`

export const DeleteButton = styled.button`
  font-size: 15px;
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