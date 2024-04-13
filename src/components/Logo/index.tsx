import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import { BiFootball } from "react-icons/bi";

interface Props {
  isHighlighColor?: boolean;
}

export function Logo({ isHighlighColor }: Props) {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/");
  }

  return (
    <Container $highlighColor={isHighlighColor} onClick={handleNavigation}>
      <BiFootball size={42} />
      <h1>FutSuperstition</h1>
    </Container>
  );
}
