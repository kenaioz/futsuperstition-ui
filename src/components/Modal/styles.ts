import { styled } from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  overflow-y: hidden;
`;

export const ModalContainer = styled.div`
  position: fixed;
  min-height: 200px;
  width: fit-content;
  background-color: ${({ theme }) => theme.COLORS.CARDBG};
  border-radius: 16px;
  padding: 3rem 2rem 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.div`
  > h2 {
    margin-bottom: 1rem;
  }
  > button {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export const ModalBody = styled.div``;
