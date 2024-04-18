import { ReactNode } from "react";

import {
  Container,
  ErrorWrapper,
  InputSearchContainer,
  FilterContainer,
} from "./styles";

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
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
      <ErrorMessage errors={errors} name={filterId} as="span" />
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
      <ErrorWrapper>
        <ErrorMessage errors={errors} name={searchId} as="span" />
        <InputSearchContainer
          {...register(searchId)}
          placeholder={placeholder}
          autoComplete="off"
        />
      </ErrorWrapper>
    </Container>
  );
}
