import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0;
  justify-content: center;

  border-radius: 10px;

  > input {
    height: 48px;
    width: 400px;

    padding: 12px 24px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    background-color: ${({ theme }) => theme.COLORS.INPUT};
    border: 0;
    border-radius: 0 8px 8px 0;
  }
`;

export const FilterContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BODY};
  border-radius: 8px 0 0 8px;
  z-index: 100;
  select {
    text-align: center;
    background: none;
    border: 0;
    color: ${({ theme }) => theme.COLORS.TEXT};
    height: 48px;

    padding: 12px;

    border-radius: 8px 0 0 8px;
    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
      outline: 1px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
    }
  }
`;
