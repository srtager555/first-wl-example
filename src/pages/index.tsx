import { MainText } from "@components/mainText.component";
import { Content, Container, Background } from "@styles/home.styles";

function Home() {
  return (
    <Container>
      <Content>
        <Background>
          <MainText text="WRAPPING" />
          <MainText text="LETTERS" />
        </Background>
      </Content>
    </Container>
  );
}

export default Home;
