import { styled } from "styled-components";

export const Container = styled.div<{ $highlighColor?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;

  color: ${({ theme, $highlighColor }) =>
    $highlighColor ? theme.COLORS.HIGHLIGHT : theme.COLORS.WHITE};
`;
