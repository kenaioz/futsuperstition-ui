import { ButtonHTMLAttributes } from "react";
import { ButtonContainer, ButtonIconContainer } from "./styles";
import { IconType } from "react-icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: IconType;
  isSecundary?: boolean;
}

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  size?: number;
}

export function Button({
  title,
  icon: Icon,
  isSecundary,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer $secundary={isSecundary} {...rest}>
      {Icon && <Icon size={24} />}

      <span>{title}</span>
    </ButtonContainer>
  );
}

export function ButtonIcon({ icon: Icon, size, ...rest }: ButtonIconProps) {
  return (
    <ButtonIconContainer {...rest}>
      {Icon && <Icon size={size} />}
    </ButtonIconContainer>
  );
}
