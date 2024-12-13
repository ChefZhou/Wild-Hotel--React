import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color-brand-600);
  color: var(--color-brand-50);
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.6rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s;

  ${(props) =>
    props.$variation === "secondary" &&
    css`
      background-color: var(--color-grey-600);
      color: var(--color-grey-50);
    `}

  &:hover {
    background-color: var(--color-brand-700);
  }

  &:disabled {
    background-color: var(--color-grey-300);
    cursor: not-allowed;
  }
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
