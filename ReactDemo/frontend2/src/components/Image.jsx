import React, { useState } from "react";
import image from "../assets/pic.png";

function Image() {
  const [col, setcol] = useState(100);
  const [row, setrow] = useState(100);

  return (
    <>
      <img src={image} style={{ height: `${col}px`, width: `${row}px` }} />
      <button
        onClick={() => {
          setcol(col + 10);
        }}
      >
        Col++
      </button>
      <button onClick={() => {
          setcol(col - 10);
        }}>Col--</button>
      
      
    </>
  );
}

export default Image;
