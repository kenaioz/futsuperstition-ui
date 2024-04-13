import Select from "react-select";
import { styled } from "styled-components";

export const LabelInputWrapper = styled.div<{ $fit?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 8px;

  width: ${({ $fit }) => ($fit ? "fit-content" : "100%")};
`;

export const LabelErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 14px;
    color: red;

    &::before {
      display: inline;
      content: "⚠ ";
    }
  }
`;

export const InputContainer = styled.input`
  background-color: ${({ theme }) => theme.COLORS.CARDBG};
  color: ${({ theme }) => theme.COLORS.TEXT};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  height: 45px;

  width: 100%;
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownList = styled.ul`
  position: absolute;
  width: 100%;

  list-style-type: none;
  background-color: ${({ theme }) => theme.COLORS.CARDBG};
  border-radius: 0 0 8px 8px;
  padding: 12px 16px;
  margin: -5px auto;

  display: flex;
  flex-direction: column;

  gap: 8px;

  max-height: 250px;
  overflow-y: scroll;

  z-index: 10;
`;

export const DropdownOptions = styled.li`
  cursor: pointer;

  padding: 12px 8px;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BODY};
    border-radius: 8px;
    outline: none;
  }
`;

export const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  max-width: fit-content;
  height: 78px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  label {
    cursor: pointer;
  }
`;

export const StyledRadio = styled.input`
  cursor: pointer;
  appearance: none;
  margin: 0;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
  border-radius: 50%;
  transition: all 0.1s ease-in;

  display: grid;
  place-items: center;

  &::after {
    content: "";
    border-radius: 50%;
    width: 0.625rem;
    height: 0.625rem;
  }

  &:checked::after,
  &:hover::after {
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.COLORS.TEXT};
    outline-offset: 2px;
  }
`;

export const StyledReactSelect = styled(Select)`
  .react-select__control {
    height: 45px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.CARDBG};
    color: ${({ theme }) => theme.COLORS.TEXT};
  }

  .react-select__input-container {
    color: ${({ theme }) => theme.COLORS.TEXT};
  }

  .react-select__control--is-focused {
    box-shadow: none;
    outline: none;
  }

  .react-select__single-value {
    color: ${({ theme }) => theme.COLORS.TEXT};
  }

  .react-select__indicator {
    color: ${({ theme }) => theme.COLORS.TEXT};
  }

  .react-select__menu {
    background-color: ${({ theme }) => theme.COLORS.CARDBG};
  }

  .react-select__option {
    cursor: pointer;
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT_HOVER};
  }

  .react-select__option--is-selected.react-select__option--is-focused {
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  }
`;

export const NumberContainer = styled.div`
  display: flex;
  align-items: stretch;
`;

export const NumberInput = styled.input`
  background-color: ${({ theme }) => theme.COLORS.CARDBG};
  color: ${({ theme }) => theme.COLORS.TEXT};
  border: none;
  border-radius: 8px 0 0 8px;
  padding: 12px 16px;
  text-align: center;
  height: 45px;

  min-width: 50px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export const NumberControl = styled.div`
  background-color: ${({ theme }) => theme.COLORS.CARDBG};

  border-radius: 0 8px 8px 0;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &:after {
    content: "";
    height: 60%;
    width: 1px;

    position: absolute;
    left: 0;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);

    background-color: grey;
  }
`;

export const ActionsButton = styled.button`
  border: none;
  background: none;

  display: grid;
  align-items: center;

  padding: 0 6px;

  &:nth-child(1) {
    border-radius: 0 8px 0 0;
  }

  &:nth-child(2) {
    border-radius: 0 0 8px 0;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
  }
`;
