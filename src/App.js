
import './App.css';
import React from "react";
import Hedder from "./Hedder";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";

function App() {
  const user = null;
  return (
    <div className="App">
      {!user ? (<Login />):(
       <> 
         <Hedder />

         <div className="app__body">
           <Sidebar />
           <Feed />
           <Widgets />
         </div> 
        </>
      ) }   
    </div>
  );
}

export default App;
