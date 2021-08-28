
import './App.css';
import React from "react";
import Hedder from "./Hedder";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
     <Hedder />

     <div className="app__body">
           <Sidebar />
           
         </div> 

    </div>
  );
}

export default App;
