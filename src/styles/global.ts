import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BODY};
    color: ${({ theme }) => theme.COLORS.TEXT};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    outline: none;
  }

  h1 {
    font-size: 2rem;
  }

  h1, h2, h3, h4, h5, label {
    font-family: 'Poppins', sans-serif;
    outline: none;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.3s;
  }

  button:hover, a:hover {
    filter: brightness(0.7);
  }
`;
