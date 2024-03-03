// import React, { useState } from "react";
import "./Color.css";
// import { ColorsData } from "../assets/Data/color";

const ColorCard = ({Data}) => {
  console.log(Data);
  return (
    <>
      <div  className="singelDivStyle">
        <div className="Color" style={{backgroundColor:`${Data.color}`}}></div>
        <div className="NameColor">
          <h1>{Data.color}</h1>
          <p style={{color:`${Data.color}`}}>{Data.name}</p>
        </div>
      </div>
    </>
  );
};

export default ColorCard;
