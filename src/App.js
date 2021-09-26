
import './App.css';
import React from "react";
import Hedder from "./Hedder";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="App">
     <Hedder />

     <div className="app__body">
           <Sidebar />
           <Feed />
           <Widgets />
           
         </div> 

    </div>
  );
}

export default App;
