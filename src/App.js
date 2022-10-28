import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <GlobalStyles />
      <React.Fragment>
        <Main theme={chosenTheme} />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;