import { ReactNode } from "react";

import { Container, InputSearchContainer, FilterContainer } from "./styles";

import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface SearchFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

interface SearchProps {
  filterId: string;
  searchId: string;
  placeholder: string;
}

export function SearchForm({ children, ...props }: SearchFormProps) {
  return <form {...props}>{children}</form>;
}

export function Search({ filterId, searchId, placeholder }: SearchProps) {
  const { register } = useFormContext();

  const options = [
    { value: "id", label: "ID" },
    { value: "homeTeam", label: "Time mandante" },
    { value: "awayTeam", label: "Time visitante" },
    { value: "date", label: "Data" },
    { value: "stadium", label: "Estádio" },
    { value: "jersey", label: "Camisa" },
    { value: "local", label: "Assistido de" },
  ];

  return (
    <Container>
      <FilterContainer {...register(filterId)}>
        <option value="" disabled>
          Filtrar
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FilterContainer>
      <InputSearchContainer
        {...register(searchId)}
        placeholder={placeholder}
        autoComplete="off"
      />
    </Container>
  );
}
