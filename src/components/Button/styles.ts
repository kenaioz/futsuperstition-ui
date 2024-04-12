import { styled, css } from "styled-components";

export const ButtonContainer = styled.button<{ $secundary?: boolean }>`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  border: none;

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  width: fit-content;

  padding: 12px 24px;

  span {
    white-space: nowrap;
  }

  ${({ theme, $secundary }) =>
    $secundary &&
    css`
      background-color: transparent;
      border: 1px solid ${theme.COLORS.HIGHLIGHT};
      color: ${theme.COLORS.TEXT};
    `}
`;

export const ButtonIconContainer = styled.button`
  color: ${({ theme }) => theme.COLORS.TEXT};
  background: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;
