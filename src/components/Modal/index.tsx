import { ReactNode, useEffect } from "react";

import { Container, ModalContainer, ModalHeader, ModalBody } from "./styles";

import { ButtonIcon } from "../Button";

import { IoClose } from "react-icons/io5";

interface Props {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ title, open, onClose, children }: Props) {
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      {open && (
        <Container onClick={() => onClose()}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h2>{title}</h2>
              <ButtonIcon icon={IoClose} size={24} onClick={() => onClose()} />
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalContainer>
        </Container>
      )}
    </>
  );
}
