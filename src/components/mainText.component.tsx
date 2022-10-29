import { useEffect, useRef, LegacyRef } from "react";
import { animation } from "./secondaryText.component";
import WrappingLetters from "wrapping-letters-react";

import { Span, Title } from "@styles/title.styles";

function Custom({ letter, top }) {
  return <Span top={top}>{letter}</Span>;
}

export function MainText({
  text,
  top = false,
}: {
  text: string;
  top?: boolean;
}) {
  const ParentRef: LegacyRef<HTMLParagraphElement> = useRef(null);

  useEffect(function () {
    const PRE_TARGETS: HTMLCollection = ParentRef.current.children;

    const TARGETS = Array.from(PRE_TARGETS);

    animation(TARGETS);
  }, []);

  return (
    <Title ref={ParentRef}>
      <WrappingLetters
        text={text}
        structure={{ structure: Custom, props: { top } }}
      />
    </Title>
  );
}
