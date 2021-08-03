import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div classname="container">

   <Weather  defaultCity="Perth"/>
    <footer>
      This Project was coded by Laura Ellington and open-sourced on{" "} 
    <a href="https://github.com/someblonde/react-weather-project" target="_blank" rel="noreferrer">
     Github
    </a>
    </footer>
    </div>
    </div>
  );
}

