import WrappingLetters from "wrapping-letters-react";

import { Title as TitleStyle } from "@styles/title.styles";

export function Title({ text }) {
  return (
    <TitleStyle>
      <WrappingLetters text={text} />
    </TitleStyle>
  );
}
