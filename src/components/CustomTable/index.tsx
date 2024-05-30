import { ReactNode } from "react";

import {
  StyledTableContainer,
  StyledTable,
  StyledTableHeaderCell,
  StyledTableCell,
  StyledTableHeader,
} from "./styles";

interface TableProps {
  headers: string[];
  children: ReactNode;
}

interface TableHeaderProps {
  headers: string[];
}

interface TableBody {
  children: ReactNode;
}

interface TableRow {
  children: ReactNode;
  key: string;
}

interface TableCell {
  children: ReactNode;
}

export function CustomTable({ headers, children }: TableProps) {
  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledTableHeader>
          <TableHeader headers={headers} />
        </StyledTableHeader>
        {children}
      </StyledTable>
    </StyledTableContainer>
  );
}

export function TableHeader({ headers }: TableHeaderProps) {
  return (
    <tr>
      {headers.map((header) => (
        <StyledTableHeaderCell key={header}>{header}</StyledTableHeaderCell>
      ))}
    </tr>
  );
}

export function TableBody({ children }: TableBody) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }: TableRow) {
  return <tr>{children}</tr>;
}

export function TableCell({ children }: TableCell) {
  return <StyledTableCell>{children}</StyledTableCell>;
}
