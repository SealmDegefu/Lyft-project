import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }
  :root {
    --main-bg-color: rgb(255, 248, 231);
    --main-font-color: rgb(0, 0, 0);
    --theme-primary: rgb(254, 202, 27);
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
    background-image: url("https://media.istockphoto.com/photos/stylized-delicate-background-with-small-flowers-picture-id1136461807?k=6&m=1136461807&s=612x612&w=0&h=rHu0gt2r_4ChtCYm9ZsjGFMx4FNDBgmI7WYfp3R0H4Y=");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

  }
  
`;

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
