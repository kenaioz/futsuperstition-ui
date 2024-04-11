import React, { ReactNode } from "react";

import {
  LabelInputWrapper,
  InputContainer,
  NumberContainer,
  NumberInput,
  NumberControl,
  ActionsButton,
  RadioGroupContainer,
  RadioWrapper,
  RadioContainer,
  StyledRadio,
  CustomLabel,
  StyledReactSelect,
} from "./styles";

import { useTheme } from "../../hooks/ThemeProvider";

import { FiMinus, FiPlus } from "react-icons/fi";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { Dayjs } from "dayjs";
import { ptBR } from "@mui/x-date-pickers/locales";
import "dayjs/locale/pt-br";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function Forms({ children, ...props }: FormProps) {
  return <form {...props}>{children}</form>;
}

export interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
  register: any;
}

export function Input({ id, label, placeholder, register }: InputProps) {
  return (
    <LabelInputWrapper>
      {label && <label htmlFor={id}>{label}</label>}
      <InputContainer
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        {...register(id)}
      />
    </LabelInputWrapper>
  );
}

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  register: any;
}

interface RadioButtonWrapperProps {
  label: string;
  children: ReactNode;
}

export function RadioButton({
  id,
  name,
  value,
  label,
  register,
}: RadioButtonProps) {
  return (
    <RadioContainer>
      <StyledRadio type="radio" id={id} value={value} {...register(name)} />
      <label htmlFor={id}>{label}</label>
    </RadioContainer>
  );
}

export function RadioGroup({ label, children }: RadioButtonWrapperProps) {
  return (
    <RadioGroupContainer>
      <CustomLabel>{label}</CustomLabel>
      <RadioWrapper>{children}</RadioWrapper>
    </RadioGroupContainer>
  );
}

export interface DropdownProps {
  id: string;
  label: string;
  placeholder?: string;
  options: { value: string | number; label: string }[];
  fieldProps: any;
}

export function Dropdown({
  id,
  label,
  placeholder,
  options,
  fieldProps,
}: DropdownProps) {
  return (
    <LabelInputWrapper>
      <label htmlFor={id}>{label}</label>
      <StyledReactSelect
        classNamePrefix="react-select"
        inputId={id}
        options={options}
        placeholder={placeholder}
        isSearchable
        isClearable
        {...fieldProps}
      />
    </LabelInputWrapper>
  );
}

export interface CustomDatePickerProps {
  label: string;
  value: Dayjs | null;
  inputRef: any;
  onChange: (date: Dayjs | null) => void;
}

export function CustomDatePicker({
  label,
  value,
  onChange,
}: CustomDatePickerProps) {
  const { theme } = useTheme();

  const StyledDatePicker = styled(DatePicker)({
    ".MuiSvgIcon-root": {
      color: theme.COLORS.TEXT,
    },

    ".MuiFormControl-root": {
      color: theme.COLORS.TEXT,
    },

    ".MuiInputBase-root": {
      backgroundColor: theme.COLORS.CARDBG,
      height: "45px",
      borderRadius: "8px",
      color: theme.COLORS.TEXT,
    },
  });

  return (
    <LabelInputWrapper>
      <CustomLabel>{label}</CustomLabel>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale="pt-br"
        localeText={
          ptBR.components.MuiLocalizationProvider.defaultProps.localeText
        }
      >
        <StyledDatePicker
          format="DD/MM/YYYY"
          value={value}
          onChange={onChange}
          slotProps={{
            popper: {
              sx: {
                ".MuiPaper-root": {
                  backgroundColor: theme.COLORS.CARDBG,
                  color: theme.COLORS.TEXT,
                  borderRadius: "8px",
                },
              },
            },
            layout: {
              sx: {
                ".MuiDayCalendar-weekDayLabel": {
                  color: theme.COLORS.TEXT,
                },
                ".MuiSvgIcon-root": {
                  color: theme.COLORS.TEXT,
                },
              },
            },
            day: {
              sx: {
                "&.MuiPickersDay-root": {
                  color: theme.COLORS.TEXT,
                },
                "&.MuiPickersDay-root:hover": {
                  backgroundColor: theme.COLORS.HIGHLIGHT_HOVER,
                },

                "&.MuiPickersDay-today": {
                  borderColor: theme.COLORS.TEXT,
                  backgroundColor: "transparent",
                },
                "&.MuiPickersDay-today:focus": {
                  borderColor: theme.COLORS.TEXT,
                  backgroundColor: "transparent",
                },

                "&.MuiPickersDay-root.Mui-selected": {
                  backgroundColor: theme.COLORS.HIGHLIGHT,
                },
                "&.MuiPickersDay-root.Mui-selected:hover": {
                  backgroundColor: theme.COLORS.HIGHLIGHT,
                },
                "&.MuiPickersDay-root.Mui-selected:focus": {
                  backgroundColor: theme.COLORS.HIGHLIGHT,
                },
              },
            },
            actionBar: {
              actions: ["clear", "today"],
              sx: {
                "&  .MuiButton-root": {
                  color: theme.COLORS.HIGHLIGHT,
                },
                "&  .MuiButton-root:hover": {
                  backgroundColor: "transparent",
                },
              },
            },
          }}
        />
      </LocalizationProvider>
    </LabelInputWrapper>
  );
}

export interface NumberProps {
  id: string;
  label: string;
  placeholder?: string;
  min: number;
  max: number;
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}

export function Number({
  id,
  label,
  placeholder,
  min,
  max,
  value,
  onChange,
}: NumberProps) {
  function increase() {
    if (value >= max) {
      alert(`O valor não pode ser maior que: ${max}`);
    } else {
      onChange(value + 1);
    }
  }

  function decrease() {
    if (value <= min) {
      alert(`O valor não pode ser menor que: ${min}`);
    } else {
      onChange(value - 1);
    }
  }

  return (
    <LabelInputWrapper fit>
      {label && <label htmlFor={id}>{label}</label>}
      <NumberContainer>
        <NumberInput
          id={id}
          type="number"
          autoComplete="off"
          placeholder={placeholder}
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
        />

        <NumberControl>
          <ActionsButton onClick={increase}>
            <FiPlus />
          </ActionsButton>
          <ActionsButton onClick={decrease}>
            <FiMinus />
          </ActionsButton>
        </NumberControl>
      </NumberContainer>
    </LabelInputWrapper>
  );
}
