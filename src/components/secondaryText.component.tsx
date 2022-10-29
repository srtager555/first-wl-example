import { LegacyRef, useEffect, useRef } from "react";
import Wl from "wrapping-letters-react";

import { Secondary, Span, SpanContainer } from "@styles/secondaryText.styles";

function Custom({ letter }) {
  return (
    <SpanContainer>
      <Span>{letter}</Span>
    </SpanContainer>
  );
}

export function SecondaryText({ text }: { text: string }) {
  const ParentRef: LegacyRef<HTMLParagraphElement> = useRef(null);

  useEffect(function () {}, []);

  return (
    <Secondary ref={ParentRef}>
      <Wl text={text} structure={Custom} />
    </Secondary>
  );
}
