import { useState } from "react";

import { Container, FabButton, FabActions, Tooltip } from "./styles";

import { IoIosAdd } from "react-icons/io";
import { IconType } from "react-icons";

interface Action {
  label: string;
  icon: IconType;
  onClick: () => void;
}

interface Props {
  actions: Action[];
}

export function Fab({ actions }: Props) {
  const [open, setOpen] = useState(false);

  const mouseEnter = () => setOpen(true);
  const mouseLeave = () => setOpen(false);

  return (
    <Container
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      data-isopen={open}
    >
      <FabButton>
        <IoIosAdd size={32} />
      </FabButton>
      {actions.map((action) => (
        <FabActions
          key={action.label}
          onClick={action.onClick}
          data-isopen={open}
        >
          <action.icon size={20} />
          <Tooltip>{action.label}</Tooltip>
        </FabActions>
      ))}
    </Container>
  );
}
