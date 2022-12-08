import styled from "@emotion/styled";

export const Button = styled.button`
  padding: 1rem 1.25rem;
  background: rgb(0, 0, 0);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  line-height: 1;

  transition: background 200ms ease-out;
  cursor: pointer;

  &:hover {
    background: rgb(50, 50, 50);
  }
`;
