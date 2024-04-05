import { Container } from "./styles";

interface Props {
  title: string;
  description: string;
}

export function List({ title, description }: Props) {
  return (
    <Container>
      <h5>{title}</h5>
      <span>{description}</span>
    </Container>
  );
}
