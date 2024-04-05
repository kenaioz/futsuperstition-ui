import { styled } from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;

  position: fixed;
  right: 2em;
  bottom: 2em;

  max-height: 52px;

  &[data-isopen="true"] {
    max-height: max-content;
  }
`;

export const FabButton = styled.li`
  border-radius: 50%;
  box-shadow: 0 3px 6px ${({ theme }) => theme.COLORS.FAB_SHADOW};
  display: grid;
  place-items: center;
  margin: 8px 0;
  padding: 12px;
  cursor: pointer;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};

  svg {
    fill: white;
  }
`;

export const FabActions = styled.li`
  transform: translateY(50px) scale(0);
  opacity: 0;
  transition: transform 300ms, opacity 300ms;
  cursor: pointer;
  padding: 12px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};

  svg {
    fill: white;
    display: grid;
    place-items: center;
  }

  &[data-isopen="true"] {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  &:hover {
    span {
      transform: translateX(-100%) translateY(-90%) scale(1);
      opacity: 1;
    }
  }
`;

export const Tooltip = styled.span`
  padding: 4px 6px;
  font-size: 14px;
  position: absolute;
  left: -15px;
  transform: translateX(-75%) translateY(-90%);
  background-color: ${({ theme }) => theme.COLORS.TOOLTIP};
  border-radius: 4px;
  color: white;
  opacity: 0;
  transition: transform 300ms, opacity 300ms;
  user-select: none;
  white-space: nowrap;
`;
