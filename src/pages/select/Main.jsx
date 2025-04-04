import React from "react";
import SkipItem from "./SkipItem";
import { SkipData } from "../../data";

export default function Main() {
  return (
    <div id="main">
      <p id="selectTitle">Choose Your Skip Size</p>
      <p id="selectText">Select the skip size that best suits your needs</p>
      <main className="skipContainer gap-6">
        {SkipData.map((item, index) => (
          <SkipItem key={index} item={item} index={index} />
        ))}
      </main>
    </div>
  );
}
