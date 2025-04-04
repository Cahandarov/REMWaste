import { BrowserRouter as Router, Routes, Route } from "react-router";

import MainLayout from "./layouts/mainLayout";
import PostCode from "./pages/postcode/PostCode";
import Select from "./pages/select/Select";
import Waste from "./pages/waste/Waste";
import Permit from "./pages/permit/Permit";
import Date from "./pages/date/Date";
import Payment from "./pages/payment/Payment";
import { useSelector } from "react-redux";

export default function App() {
  const Index = useSelector((state) => state.page.currentIndex);

  return (
    <div className="app">
      {Index == 0 && <PostCode />}

      <MainLayout className="layout">
        {Index == 1 && <Waste />}
        {Index == 2 && <Select />}
        {Index == 3 && <Permit />}
        {Index == 4 && <Date />}
        {Index == 5 && <Payment />}
      </MainLayout>
    </div>
  );
}
