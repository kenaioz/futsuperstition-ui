import { styled } from "styled-components";

export const Container = styled.div`
  display: inline-block;

  width: 34px;
  height: 34px;

  border: 4px solid ${({ theme }) => theme.COLORS.CARDBG};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
