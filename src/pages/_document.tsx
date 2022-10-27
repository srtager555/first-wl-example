import styled from "styled-components";

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const Body = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdfdfd;
  `;

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital@1&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Body>
        <Main />
        <NextScript />
      </Body>
    </Html>
  );
}
