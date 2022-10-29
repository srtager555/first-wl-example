import { useState } from "react";
import { MainText } from "@components/mainText.component";
import { SecondaryText } from "@components/secondaryText.component";
import { Content, Container, Background } from "@styles/home.styles";

function Home() {
  const [reset, setReset] = useState(false);

  const handleClick = () => {
    setReset(!reset);
  };

  return (
    <Container onClick={handleClick}>
      <Content>
        <Background>
          <MainText text="WRAPPING" top={true} reset={reset} />
          <SecondaryText text="Package.to.work.with.letters" reset={reset} />
          <MainText text="LETTERS" reset={reset} />
        </Background>
      </Content>
    </Container>
  );
}

export default Home;
