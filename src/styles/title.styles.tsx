import styled from "styled-components";

interface SpanProps {
  readonly top: boolean;
}

export const Title = styled.p`
  font-family: "Bebas Neue";
  font-size: 300px;
  text-align: center;
  line-height: 250px;
  overflow: hidden;
`;

export const Span = styled.span<SpanProps>`
  display: inline-block;
  background: linear-gradient(
    ${(props) => (props.top ? 180 : 0)}deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(9, 9, 121, 1) 75%,
    rgba(2, 0, 36, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
