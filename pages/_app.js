import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

  body{
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
  }

  .green-btn{
    background-color: #D9FD54;
    border: none;
    display: flex;
    align-items: center;
    gap: 4px;

    &:hover{
      background: #bfd200;
      color: #FFF;
    }
  }

  .white-btn{
    background: transparent;
    border: 1px solid #FFF;
    color: #FFF;

    &:hover{
      background: #FFF;
      color: black;
    }
  }

  .home-icons{
    width: 20px;
    height: 20px;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
