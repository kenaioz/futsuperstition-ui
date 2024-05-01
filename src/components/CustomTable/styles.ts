import { styled } from "styled-components";

export const StyledTableContainer = styled.div`
  display: block;
  max-height: 530px;
  width: 100%;
  overflow-y: auto;

  margin-right: 12px;
`;

export const StyledTableHeader = styled.thead`
  color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.COLORS.TABLEHEADER};
`;

export const StyledTableHeaderCell = styled.th`
  padding: 12px 20px;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
`;

export const StyledTable = styled.table`
  width: 100%;
  min-width: 600px;

  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;

  tbody {
    tr {
      background-color: transparent;
      text-align: center;

      &:nth-child(even) {
        background-color: ${({ theme }) => theme.COLORS.TABLEBODYEVEN};
      }
    }

    td:last-child {
      display: inline-block;
    }
  }
`;

export const StyledTableCell = styled.td`
  padding: 12px 6px;
  white-space: nowrap;
`;
