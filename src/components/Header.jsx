import "./header.css";
import { HeaderData } from "./headerButtonsData";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../pages/routerSlice";
export default function Header() {
  const dispatch = useDispatch();
  const currentIndex = useSelector((state) => state.page.currentIndex);
  return (
    <header className="header">
      <div className="headerUL">
        {HeaderData.map((btn, index) => (
          <div
            onClick={() => {
              index < currentIndex && dispatch(setPage(index));
            }}
            className={`btn ${
              index <= currentIndex ? "btnActive" : "btnDefault"
            }`}
            key={index}
          >
            <img
              className={
                index <= currentIndex ? "btnImgActive" : "btnImgDefault"
              }
              src={btn.btnIcon}
            />
            <p
              className={
                index <= currentIndex ? "btnTextActive" : "btnTextDefault"
              }
            >
              {btn.text}
            </p>
            {index != 5 && (
              <div
                className={
                  index + 2 == currentIndex ? "btnLineActive" : "btnLineDefault"
                }
              ></div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
