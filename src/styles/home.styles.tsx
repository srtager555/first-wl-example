import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 900px;
  width: 1000px;
  background-color: #fff;
  overflow: hidden;
`;
export const Background = styled.div`
  background: rgb(0, 212, 255);
  background: linear-gradient(
    0deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(9, 9, 121, 1) 30%,
    rgba(2, 0, 36, 1) 50%,
    rgba(9, 9, 121, 1) 70%,
    rgba(0, 212, 255, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #ededed;
`;
