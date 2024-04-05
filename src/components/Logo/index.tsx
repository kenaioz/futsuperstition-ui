import { Container } from "./styles";

import { BiFootball } from "react-icons/bi";

interface Props {
  isHighlighColor?: boolean;
}

export function Logo({ isHighlighColor }: Props) {
  return (
    <Container $highlighColor={isHighlighColor}>
      <BiFootball size={42} />
      <h1>FutSuperstition</h1>
    </Container>
  );
}
