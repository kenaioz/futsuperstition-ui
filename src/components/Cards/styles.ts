import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.CARDBG};

  border-radius: 8px;
  width: 100%;
  padding: 24px 32px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  flex: 1;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 12px;

  h3,
  svg {
    color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  }
`;

export const ContainerTopCard = styled.div`
  background-color: ${({ theme }) => theme.COLORS.CARDBG};

  border-radius: 10px;
  width: 250px;
  height: 190px;
  padding: 24px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const TierList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  flex: 1;

  > h5,
  h6 {
    margin-top: 24px;
  }

  span:nth-child(1) {
    width: fit-content;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
  }

  span:nth-child(2) {
    font-size: 14px;
    opacity: 0.5;
    width: fit-content;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
  }

  span:nth-child(3) {
    font-size: 12px;
    opacity: 0.3;
    width: fit-content;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
  }
`;

export const TierLists = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLongCard = styled.div`
  background-color: ${({ theme }) => theme.COLORS.CARDBG};

  border-radius: 10px;
  width: 100%;
  height: 200px;
  padding: 24px;
`;

export const VerticalDivider = styled.div`
  width: 2px;
  transform: translateY(-20%);
  height: 100px;
  background: ${({ theme }) => theme.COLORS.BODY};
`;
