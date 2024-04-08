import { styled } from "styled-components";

export const InputContainer = styled.input`
  background-color: ${({ theme }) => theme.COLORS.CARDBG};
  color: ${({ theme }) => theme.COLORS.TEXT};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  height: 45px;

  width: 100%;
`;

export const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 8px;

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

export const CustomLabel = styled.span`
  font-family: "Poppins";
  font-size: 16px;
`;

export const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  label {
    cursor: pointer;
  }
`;

export const StyledRadio = styled.input`
  cursor: pointer;
  appearance: none;
  margin: 0;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.COLORS.HIGHLIGHT};
  border-radius: 50%;
  transition: all 0.1s ease-in;

  display: grid;
  place-items: center;

  &::after {
    content: "";
    border-radius: 50%;
    width: 10px;
    height: 10px;
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
