import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: Pretendard;
  }
  
  body{
    margin: 0;
    padding: 0;
    font-family: Pretendard;
    min-width: 320px;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  button{
    background: inherit ;
    border:none;
    box-shadow:none;
    border-radius:0;
    padding:0;
    overflow:visible;
    cursor:pointer;
    color:inherit;
  }
`;
