import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { HouseProvider } from "./context";

ReactDOM.render(

  <HouseProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HouseProvider>,

  document.getElementById("root")
);


