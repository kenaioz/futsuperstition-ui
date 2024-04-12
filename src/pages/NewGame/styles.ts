import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const PageContent = styled.div`
  padding: 7rem 0;

  fieldset {
    border: none;
  }
`;

export const FormsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem 2rem;
  margin-bottom: 32px;
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
