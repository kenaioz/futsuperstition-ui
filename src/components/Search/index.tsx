import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { SearchParamsType } from "../../pages/Dashboard/index";

import { Container, FilterContainer } from "./styles";

interface SearchProps {
  value: SearchParamsType;
  onChange: (value: SearchParamsType) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}

interface FilterProps {
  value: string;
  options: { value: string; label: string }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export function Search({ value, onChange, onKeyDown }: SearchProps) {
  const [searchInput, setSearchInput] = useState(value.query);
  const [filterOption, setFilterOption] = useState(value.filter);

  useEffect(() => {
    if (!value.query && !value.filter) {
      setSearchInput("");
      setFilterOption("");
    }
  }, [value]);

  const options = [
    { value: "id", label: "ID" },
    { value: "teamHome", label: "Time mandante" },
    { value: "teamAway", label: "Time visitante" },
    { value: "date", label: "Data" },
    { value: "stadium", label: "Estádio" },
    { value: "jersey", label: "Camisa" },
    { value: "place", label: "Assistido de" },
  ];

  const handleChanges = (name: string, newValue: string) => {
    onChange({
      ...value,
      [name]: newValue,
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchInput(value);
    handleChanges(name, value);
  };

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilterOption(value);
    handleChanges(name, value);
  };

  return (
    <Container>
      <Filter
        options={options}
        value={filterOption}
        onChange={handleFilterChange}
      />
      <input
        name="query"
        value={searchInput || ""}
        placeholder="Selecione o filtro e faça sua pesquisa"
        autoComplete="off"
        onKeyDown={onKeyDown}
        onChange={handleInputChange}
      />
    </Container>
  );
}

export function Filter({ value, options, onChange }: FilterProps) {
  return (
    <FilterContainer>
      <select name="filter" value={value} onChange={onChange}>
        <option value="" disabled>
          Filtrar
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FilterContainer>
  );
}
