import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html {
    overflow-y: scroll;
  }

  html,
  body {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: "EB Garamond", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    hyphens: manual;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "NYTCheltenham-Book", serif;
    margin: 0;
    color: ${({ theme }) => theme.text};
  }

  .logoSubtitle {
    margin: 0 auto;
    font-size: 0.6rem;
    text-transform: uppercase;
    font-family: 'Libre Franklin', sans-serif;
  }

  .logo {
    font-family: "Chomsky", serif;
    font-size: 3rem;
    font-weight: lighter;
  }

  h1 {
    font-size: 3rem;
  }

  h6 {
    color: red;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    font-size: 0.8rem;
  }

  a:link {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  a:visited {
    text-decoration: none;
    ${({ theme }) => theme.text}
  }

  a:hover {
    text-decoration: none;
    ${({ theme }) => theme.text}
  }

  a:active {
    text-decoration: none;
    ${({ theme }) => theme.text}
  }

  .link {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  a:visited {
    color: ${({ theme }) => theme.text};
  }

  .CategorySelector {
    font-family: 'Libre Franklin', sans-serif;
    font-size: 10px;
    text-transform: "uppercase";
    color: ${({ theme }) => theme.text};
  }

  .NameDay {
    font-family: 'Libre Franklin', sans-serif;
    font-size: 12px;
  }

  .Grid-item {
    /* background-color: lightblue; */
    padding: 2px 8px;
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Header {
    border-top: 1px solid #ebebeb;
    border-bottom: 4px double #ebebeb;
  }

  .Header-top {
    margin-top: 8px;
  }

  .Header-weather {
    grid-area: wea;
    position: relative;
  }

  #weather-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  }

  #weather-left {
    margin-top: 5%;
    width: 15%;
  }

  #weather-right {
    margin-left: 5%;
    margin-top: 8%;
  }

  .Header-logo {
    grid-area: log;
  }

  .FlexColumn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .Header-quote {
    grid-area: quo;
    display: flex;
    justify-content: space-between;
  }

  .QuoteContainer {
    width: 70%;
    border: 1px solid #ebebeb;
    margin: 4px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Header-column-1 {
    grid-area: he1;
  }

  .Header-column-2 {
    grid-area: he2;
  }

  .Header-column-3 {
    grid-area: he3;
  }

  .Main {
    align-items: flex-start;
    margin: 20px 0;
    padding: 0 10px;
  }

  .Main-column-1 {
    grid-area: co1;
  }

  .Main-column-2 {
    grid-area: co2;
  }

  .Main-column-3 {
    grid-area: co3;
    border-left: 1px solid #ebebeb;
    border-right: 1px solid #ebebeb;
    padding: 0 20px;
  }

  .Main-column-4 {
    grid-area: co4;
    text-align: center;
  }

  .Main-column-4 p {
    margin: 0.5rem;
    text-align: center;
  }

  #recipe-description {
    text-align: left;
  }

  .Main-column-4 img {
    width: 60%
  }

  .Main-comic {
    grid-area: com;
    border-top: 1px solid #ebebeb;
    margin: 10px;
  }

  .Main-bottom {
    grid-area: bot;
  }

  .Footer {
    grid-area: foo;
    padding: 10 8px;
  }

  .Container {
    width: 90%;
    margin: 0 auto;
    height: 100vh;
    display: grid;
    row-gap: 3%;
    grid-template-columns: 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr;
    grid-template-rows: 3fr 1fr 12fr 4fr 1fr;
    grid-template-areas:
      "wea wea wea log log log log log log quo quo quo"
      "he1 he1 he1 he1 he2 he2 he2 he2 he3 he3 he3 he3"
      "co1 co1 co2 co2 co3 co3 co3 co3 co3 co3 co4 co4"
      "com com com com co3 co3 co3 co3 co3 co3 co4 co4"
      "foo foo foo foo foo foo foo foo foo foo foo foo";
  }

  .ButtonText {
    color: ${({ theme }) => theme.text};
  }

  `;

export const lightTheme = {
  body: "white",
  text: "black",
};
export const darkTheme = {
  body: "#33404c",
  text: "white",
};
