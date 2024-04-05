import { styled } from "styled-components";

export const ButtonContainer = styled.button<{ $secundary?: boolean }>`
  color: ${({ theme, $secundary }) =>
    $secundary ? theme.COLORS.TEXT : theme.COLORS.WHITE};
  background-color: ${({ theme, $secundary }) =>
    $secundary ? "transparent" : theme.COLORS.HIGHLIGHT};

  border: ${({ theme, $secundary }) =>
    $secundary ? `1px solid ${theme.COLORS.HIGHLIGHT}` : "none"};

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
`;

export const ButtonIconContainer = styled.button`
  color: ${({ theme }) => theme.COLORS.TEXT};
  background: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;
