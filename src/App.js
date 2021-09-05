
import './App.css';
import React from "react";
import Hedder from "./Hedder";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="App">
     <Hedder />

     <div className="app__body">
           <Sidebar />
           <Feed />
           
         </div> 

    </div>
  );
}

export default App;
