import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";

import {
  LabelInputWrapper,
  InputContainer,
  DropdownContainer,
  DropdownList,
  DropdownOptions,
  RadioFieldset,
  RadioWrapper,
  RadioContainer,
  StyledRadio,
} from "./styles";

import { TeamsType } from "../../services/teams";
import { StadiumsType } from "../../services/stadiums";

export interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export function Input({ id, label, placeholder, value, onChange }: InputProps) {
  const [inputValue, setInputValue] = useState<string>(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <LabelInputWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <InputContainer
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        value={inputValue || ""}
        onChange={handleInputChange}
      />
    </LabelInputWrapper>
  );
}

export interface DropdownOption {
  id: number | string;
  name: string;
}

export interface DropdownProps {
  id: string;
  label: string;
  placeholder?: string;
  value: TeamsType | StadiumsType;
  options: TeamsType[] | StadiumsType[];
  onChange: Dispatch<SetStateAction<TeamsType | StadiumsType>>;
}

export function Dropdown({
  id,
  label,
  placeholder,
  value,
  options,
  onChange,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<
    TeamsType[] | StadiumsType[]
  >([]);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  useEffect(() => {
    setSearchValue("");
    setFilteredOptions(options);
  }, [isOpen, options]);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const removeAccents = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (value.name && inputValue.length > 1) {
      setSearchValue(inputValue.slice(-1));

      onChange({ id: "", name: "" });
      setFilteredOptions(options);

      return;
    }

    setSearchValue(inputValue);

    const filtered = options.filter((option) =>
      removeAccents(option.name).includes(removeAccents(inputValue))
    );

    setFilteredOptions(filtered);
  };

  const getDisplay = () => {
    if (!value.name || value.name.length === 0) {
      return searchValue;
    }

    return value.name;
  };

  const handleOptionSelect = (selectedValue: TeamsType | StadiumsType) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement | HTMLInputElement>,
    option?: TeamsType | StadiumsType
  ) => {
    if (e.key === "Backspace" && value.name) {
      setSearchValue("");
      onChange({ id: "", name: "" });
    }

    if (e.key === "Enter" && option) {
      onChange(option);
      setIsOpen(false);
    }
  };

  const handleFocus = () => {
    if (!isOpen) {
      setTimeout(() => {
        setIsOpen(true);
      }, 100);
    }
  };

  return (
    <LabelInputWrapper>
      <label htmlFor={id}>{label}</label>
      <DropdownContainer>
        <InputContainer
          id={id}
          placeholder={placeholder}
          autoComplete="off"
          value={getDisplay()}
          onChange={handleSearch}
          onClick={handleToggleDropdown}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        {isOpen && (
          <DropdownList>
            {filteredOptions.map((option) => (
              <DropdownOptions
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                onKeyDown={(e) => handleKeyDown(e, option)}
                tabIndex={0}
              >
                {option.name}
              </DropdownOptions>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </LabelInputWrapper>
  );
}

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
}

interface RadioButtonWrapperProps {
  label: string;
  children: ReactNode;
}

export function RadioButton({
  id,
  name,
  value,
  checked,
  onChange,
  label,
}: RadioButtonProps) {
  return (
    <RadioContainer>
      <StyledRadio
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={id}>{label}</label>
    </RadioContainer>
  );
}

export function RadioGroup({ label, children }: RadioButtonWrapperProps) {
  return (
    <RadioFieldset>
      <div>
        <legend>{label}</legend>
      </div>

      <RadioWrapper>{children}</RadioWrapper>
    </RadioFieldset>
  );
}
