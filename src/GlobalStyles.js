import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('fonts/Avenir-Next-West/AvenirNext-UltraLight.ttf');
  @import url('fonts/Avenir-Next-West/AvenirNext-Bold.ttf');
  @import url('fonts/Avenir-Next-West/AvenirNext-Regular.ttf');

  body {
    font-family: 'AvenirNext-UltraLight';
    vertical-align: baseline;
    color:#fff;
    background-color: #121212;
    font-size:20px;
    line-height: 26px;
  }

  h1 {
    font-family: 'AvenirNext-Regular';
    font-size: 60px;
    font-weight: 100;
    line-height: 6rem;
    letter-spacing: 25px;
  }

  h2 {
    font-family: 'AvenirNext-Regular';
    font-size: 24px;
    font-weight: 100;
    line-height: 25px;
    letter-spacing: 3px;
  }

  h3 {
    font-family: 'AvenirNext-Regular';
    font-size: 20px;
    font-weight: 100;
    line-height: 40px;
  }

  p {
    font-weight: 100;
    color: rgba(255,255,255,0.6);
  }

  span {
    font-family: 'AvenirNext-Regular';
    font-size: 14px;
    font-weight: 100;
    line-height: 2,5rem;
  }

  ul {
    font-family: 'AvenirNext-Bold';
    font-size: 40px;
    font-weight: 100;
    line-height: 2,5rem;
  }

  a {
    font-family: 'AvenirNext-Regular';
    font-size: 20px;
    font-weight: 100;
    line-height: 40px;
    letter-spacing: 2px;
  }
`
