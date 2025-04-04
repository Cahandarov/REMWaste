import React from "react";
import bg from "../../assets/image/skipbg.jpeg";
import warmingIcon from "../../assets/image/warning.svg";
import arrow from "../../assets/image/arrow-right.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSkip } from "./selectSlice";

export default function SkipItem({ item, index }) {
  const dispatch = useDispatch();
  const selectedSkipIndex = useSelector(
    (state) => state.selectedSkip.selectedSkipIndex
  );

  return (
    <div
      className={`${
        selectedSkipIndex == index ? "skipItemSelected" : "skipItemDefault"
      } ${item.allows_heavy_waste ? "skipItem" : "locked"}`}
      onClick={() => {
        if (item.allows_heavy_waste) {
          dispatch(setSkip(index));
        }
      }}
    >
      <div className="imgContainer">
        <img id="skipBg" src={bg} />
        <div className="smallBox">{item.size} Yards</div>
        <div className="bottomBox">
          {!item.allowed_on_road && (
            <div className="blackBoxes">
              <img className="warningYellow" src={warmingIcon} />
              <p className="textYellow">Private Property Only</p>
            </div>
          )}
          {!item.allows_heavy_waste && (
            <div className="blackBoxes">
              <img className="warningRed" src={warmingIcon} />
              <p className="textRed">Not Suitable for Heavy Waste</p>
            </div>
          )}
        </div>
      </div>
      <p className="skipItemText">{item.size} Yard Skip</p>
      <p className="skipItemTextSmall">
        {item.hire_period_days} day hire period
      </p>
      <p className="priceText">
        £{item.price_before_vat}
        <span className="priceText2"> per week</span>
      </p>
      {selectedSkipIndex == index && (
        <button className="skipItemBtnSelected">Selected</button>
      )}
      {selectedSkipIndex != index && (
        <div className="btnBox">
          <button className="skipItemBtn">Select This Skip</button>
          <img src={arrow} className="arrow" />
        </div>
      )}
    </div>
  );
}
