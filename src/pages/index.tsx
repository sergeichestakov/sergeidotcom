import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

export default function Index() {
  return (
    <Container height="100vh">
      <Hero />
      <Main></Main>

      <DarkModeSwitch />
    </Container>
  );
}
