import { useState } from 'react';
import './App.css';
import Card from './components/Card';
// import logo from "../public/pic.png";
import Image from './components/Image';

function App() {
  return (
    <>
    <div className='cards'>
      {/* <Card image={logo} name="ANURAG" class="B.Tech"/>
      <Card image={logo} name="ANURAG" class="B.Tech"/>
      <Card image={logo} name="ANURAG" class="B.Tech"/> */}

      <Image></Image>
    </div>
    </>
  );
}

export default App;
