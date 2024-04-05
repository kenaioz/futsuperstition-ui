import { Container, Title, TextWrapper } from "./styles";

import { Logo } from "../../components/Logo";

export function NotFound() {
  return (
    <Container>
      <Logo isHighlighColor />
      <Title>404</Title>
      <TextWrapper>
        <span>Infelizmente a página que você está procurando não existe.</span>
        <a href="/">Voltar para a tela principal</a>
      </TextWrapper>
    </Container>
  );
}
