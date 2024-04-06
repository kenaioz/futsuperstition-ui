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

export const Forms = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 3rem;
  margin-bottom: 32px;
`;
