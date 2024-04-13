import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const PageContent = styled.div`
  padding: 7rem 0;

  fieldset {
    border: none;

    legend {
      margin-bottom: 32px;
    }
  }
`;

export const FormsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 1rem;
  margin-bottom: 8rem;
`;

export const DualSection = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ActionsSection = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
`;

export const Code = styled.pre`
  background-color: ${({ theme }) => theme.COLORS.BODY};
  padding: 12px;
  border-radius: 16px;
  margin-bottom: 1rem;
  font-size: 14px;
`;
