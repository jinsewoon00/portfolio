import { css } from "@emotion/react";
import { mq } from "../common";
const Init = css`
  /* 한글 범위:  U+AC00-D7A3
영어 대문자 범위 :  U+0041-005A
영어 소문자 범위 :   U+0061-007A
숫자 범위 : U+0030-0039
특수 문자: U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E */

  @font-face {
    font-family: "SUIT Variable,sans-serif";
    src: url("https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/variable/woff2/SUIT-Variable.css");
  }

  @font-face {
    font-family: "Montserrat,sans-serif";
    src: url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  html {
    font-size: 62.5%;
    transition: font-size 0.21s;
    ${mq[1]} {
      font-size: 50%;
    }
    ${mq[0]} {
      font-size: 40%;
    }
  }
  * {
    -webkit-tap-highlight-color: transparent;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  sub,
  sup,
  tt,
  var,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  button,
  input,
  br {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    color: #000;
    /* line-height: 1.2; */
    /* letter-spacing: -0.36px; */
    font-family: "Montserrat, SUIT Variable, sans-serif";
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover,
  a:active {
    text-decoration: none;
  }

  img {
    border: none;
    vertical-align: middle;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  i,
  em {
    font-style: normal;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset {
    border: none;
  }

  legend {
    width: 1px;
    height: 1px;
    overflow: hidden;
    visibility: hidden;
    line-height: 0;
    font-size: 0;
    position: absolute;
    left: -999px;
  }

  textarea {
    resize: none;
  }

  input,
  select,
  button,
  textarea {
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  button:focus {
    outline: 0;
  }
`;

export default Init;
