import { MainText } from "@components/mainText.component";
import { SecondaryText } from "@components/secondaryText.component";
import { Content, Container, Background } from "@styles/home.styles";

function Home() {
  return (
    <Container>
      <Content>
        <Background>
          <MainText text="WRAPPING" top={true} />
          <SecondaryText text="Package.to.work.with.letters" />
          <MainText text="LETTERS" />
        </Background>
      </Content>
    </Container>
  );
}

export default Home;
