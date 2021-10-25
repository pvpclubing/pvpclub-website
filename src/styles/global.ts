import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.family.primary};
    font-size: ${({ theme }) => theme.size.normal};
    font-weight: ${({ theme }) => theme.weight.medium};
    text-align: left;
    color: ${({ theme }) => theme.colors.text.lightest};
    background-color: #000000;
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5 {
    padding: 0;
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;