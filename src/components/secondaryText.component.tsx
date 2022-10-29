import { LegacyRef, useEffect, useRef } from "react";
import anime from "animejs";
import Wl from "wrapping-letters-react";

import { Secondary, Span, SpanContainer } from "@styles/secondaryText.styles";

function Custom({ letter, cssClass }) {
  return (
    <SpanContainer>
      <Span color={cssClass}>{letter}</Span>
    </SpanContainer>
  );
}

export function animation(TARGETS: Element[]) {
  anime({
    targets: TARGETS,
    translateY: ["100%", "0%"],
    delay: anime.stagger(100, { from: "center" }),
    duration: 1000,
    easing: "easeOutQuint",
  });
}

export function SecondaryText({ text }: { text: string }) {
  const ParentRef: LegacyRef<HTMLParagraphElement> = useRef(null);

  useEffect(function () {
    const PRE_TARGETS: HTMLCollection = ParentRef.current.children;

    const TARGETS = Array.from(PRE_TARGETS, (element) => element.children[0]);

    animation(TARGETS);
  }, []);

  return (
    <Secondary ref={ParentRef}>
      <Wl
        text={text}
        textOptions={{
          SelectClass: { wordToSearch: ".", classToAdd: "transparent" },
        }}
        structure={Custom}
      />
    </Secondary>
  );
}
