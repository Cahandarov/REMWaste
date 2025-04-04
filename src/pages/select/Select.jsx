import React from "react";
import Footer from "./Footer";
import "../select/select.css";
import Main from "./Main";
import { useSelector } from "react-redux";

export default function Select() {
  const selectedSkipIndex = useSelector(
    (state) => state.selectedSkip.selectedSkipIndex
  );
  return (
    <div className="select">
      <Main />
      {selectedSkipIndex != null && <Footer />}
    </div>
  );
}
