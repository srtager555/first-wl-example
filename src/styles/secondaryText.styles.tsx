import styled from "styled-components";

export const Secondary = styled.p`
  font-size: 95px;
  text-align: center;
  font-family: "Bebas Neue", serif;
  text-transform: uppercase;
`;

export const SpanContainer = styled.span`
  display: inline-block;
  overflow: hidden;
`;

export const Span = styled.span`
  display: inline-block;
  white-space: pre;
  transform: translateY(0%);
  color: ${(props) => (props.color ? props.color : "rgba(2, 0, 36, 1)")};
`;
