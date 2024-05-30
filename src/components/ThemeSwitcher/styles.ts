import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerSkeleton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid grey;
  width: fit-content;
  border-radius: 8px;
  padding: 8px;
`;

export const PageSchemaContainer = styled.div<{ $light?: boolean }>`
  height: 100px;
  width: 200px;
  border: 1px solid grey;
  border-radius: 8px;
  overflow: hidden;

  background-color: ${(props) => (props.$light ? "#F0F0F0" : "#0F0F0F")};

  cursor: pointer;

  header {
    height: 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  }

  main {
    padding: 16px;
    section {
      height: 55px;
      border-radius: 4px;
      background-color: ${(props) => (props.$light ? "#FFFF" : "#1F1F1F")};

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: end;
      gap: 16px;

      padding: 8px;

      div {
        width: 100%;
        border-radius: 2px;
        background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
      }

      div:nth-child(even) {
        height: 32px;
      }
      div:nth-child(odd) {
        height: 16px;
      }
    }
  }
`;
