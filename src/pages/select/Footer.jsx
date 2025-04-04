import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SkipData } from "../../data";
import arrow from "../../assets/image/arrow-right.svg";
import { setPage } from "../routerSlice";

export default function Footer() {
  const dispatch = useDispatch();
  const selectedSkipIndex = useSelector(
    (state) => state.selectedSkip.selectedSkipIndex
  );
  const currentIndex = useSelector((state) => state.page.currentIndex);

  return (
    <div id="footer">
      <div className="footerLeft">
        {selectedSkipIndex != null && (
          <p className="footerText">{SkipData[selectedSkipIndex].size}</p>
        )}
        <p className="footerText">
          <span className="textFooterBlue">£</span> 7 day hire
        </p>
      </div>
      <div className="footerButtonBox">
        <button
          onClick={() => dispatch(setPage(currentIndex - 1))}
          id="buttonBack"
        >
          Back
        </button>
        <div className="boxForArrow">
          <button
            onClick={() => dispatch(setPage(currentIndex + 1))}
            id="buttonCon"
          >
            Continue
          </button>
          <img src={arrow} className="arrowBottom" />
        </div>
      </div>
    </div>
  );
}
