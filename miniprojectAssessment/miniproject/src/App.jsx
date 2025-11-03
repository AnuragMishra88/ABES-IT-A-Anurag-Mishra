import React from "react";
import "./App.css";
import Card from "./card";
import Navbar from "./Navbar";
import Change from "./Change";



function App() {
  return (
   <>
   <Navbar/>
   <Card name={"Anurag"}/>
   <Card name={"Abhishek"}/>
   <Card name={"Aman"}/>
   <Change/>

   </>
  );
}

export default App;
