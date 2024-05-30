import { Logo } from "../Logo";

import { Layout } from "../Layout";

import { Container, HeaderContent, NavListContainer } from "./styles";

export function Header() {
  return (
    <Container>
      <Layout>
        <HeaderContent>
          <Logo />
        </HeaderContent>
      </Layout>
    </Container>
  );
}

export function NavList() {
  return <NavListContainer></NavListContainer>;
}
