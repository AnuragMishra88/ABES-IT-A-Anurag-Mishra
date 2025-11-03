// import React from 'react'

// function Change() {

//     function change(){
//         document.write("Hello");
//         console.log("heloo");
//     }
//     function counter(){
      

//     }
//   return (
//     <div>
//         <button onClick={change}>Click</button>
//         <button onClick={counter(1)}>Counter</button>
//     </div>
//   )
// }

// export default Change




import React, { useState } from "react";

function Change() {
  const [count, setCount] = useState(0);
  const [style,setstyle]=useState({
  style:{
    backgroundColor:"red"
  }
  });

  function change() {
    setCount(count + 1);
  }
  function decre() {
    setCount(count - 1);
  }

  function chngcolor(){
    setstyle(
      style:{
        backgroundColor:"green"
      }
    )
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={change}>Click</button>
      <p>{count} times</p>
      <button onClick={decre}>DECREASE</button>
      <button onClick={chngcolor}>CLK</button>
    </div>
  );
}

export default Change;