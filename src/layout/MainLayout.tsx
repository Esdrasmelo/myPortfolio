import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";

function MainLayout() {
  return (
    <>
      <MobileHeader />
      <Header />
      <div style={{ height: 80 }} />
      <Outlet />
      <div style={{ height: 80 }} />
      <Footer />
    </>
  );
}

export default MainLayout;
