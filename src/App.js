import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">

   <Weather  defaultCity="Reykjavik"/>
    <footer>
      This Project was coded by Laura E and open-sourced on{" "} 
    <a href="https://github.com/someblonde/react-weather-project" target="_blank" rel="noreferrer">
     Github
    </a>
    </footer>
    </div>
    </div>
  );
}

