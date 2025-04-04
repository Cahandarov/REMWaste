import React from "react";
import Header from "../components/header";
import { useSelector } from "react-redux";

export default function MainLayout({ children }) {
  const Index = useSelector((state) => state.page.currentIndex);
  return (
    <>
      {Index != 0 && <Header />}
      <div>{children}</div>
    </>
  );
}
