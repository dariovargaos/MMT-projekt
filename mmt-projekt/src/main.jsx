import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

//images
import backgroundImage from "./assets/bg.jpg";

const customTheme = extendTheme({
  styles: {
    global: {
      root: {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={customTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
