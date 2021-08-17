import React from "react";
import './App.css';
import Weather from "./Weather";
import background from "./Images/landscape2-zandra.jpg"

export default function App() {
  return (
    
    <div className="App">
      <div className="container">
               <div style={{ backgroundImage: `url(${background})` }}>
      
    
   
        

   <Weather  defaultCity="Reykjavik"/>
    <footer>
      This Project was coded by Laura E and open-sourced on{" "} 
    <a href="https://github.com/someblonde/react-weather-project" target="_blank" rel="noreferrer">
     Github
    </a>
    </footer>
    </div>
    </div>
    </div>
  );
}

