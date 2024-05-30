import { styled } from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;

export const PageContent = styled.div`
  padding: 7rem 0;

  h1 {
    margin-bottom: 32px;
  }
`;

export const TablesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const TableSection = styled.fieldset`
  padding: 32px;
  border-radius: 10px;

  legend {
    color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
    padding: 0 12px;

    h2 {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
`;

export const ActionsRow = styled.div`
  display: flex;
  justify-content: end;
`;
