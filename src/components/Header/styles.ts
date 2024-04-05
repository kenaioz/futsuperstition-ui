import { styled } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  padding: 12px 0;

  background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  color: ${({ theme }) => theme.COLORS.WHITE};
  z-index: 1000;
`;

export const HeaderContent = styled.div`
  color: ${({ theme }) => theme.COLORS.BODY};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavListContainer = styled.nav``;
