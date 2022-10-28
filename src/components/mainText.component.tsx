import WrappingLetters from "wrapping-letters-react";

import { Title } from "@styles/title.styles";

export function MainText({ text }: { text: string }) {
  return (
    <Title>
      <WrappingLetters text={text} />
    </Title>
  );
}
