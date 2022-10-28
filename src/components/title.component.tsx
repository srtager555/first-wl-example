import WrappingLetters from "wrapping-letters-react";

import { Title as TitleStyle } from "@styles/title.styles";

export function Title({ text }: { text: string }) {
  return (
    <TitleStyle>
      <WrappingLetters text={text} />
    </TitleStyle>
  );
}
