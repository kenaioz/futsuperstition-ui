import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const PageContent = styled.div`
  padding: 7rem 0;

  h1 {
    margin-bottom: 32px;
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const DashboardSection = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 32px;

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

export const GraphsRow = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 32px;
`;

export const DashboardSubSection = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  > div {
    flex: 1;
  }
`;

export const CardsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const CardsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 3rem;
  margin-bottom: 32px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  width: 100%;
`;

export const ModalCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
