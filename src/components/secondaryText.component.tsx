import Wl from "wrapping-letters-react";

import { Secondary } from "@styles/secondaryText.styles";

export function SecondaryText({ text }: { text: string }) {
  return (
    <Secondary>
      <Wl text={text} />
    </Secondary>
  );
}
