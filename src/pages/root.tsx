import { Outlet } from "react-router-dom";
import NavbarBs from "../assets/components/navbar/NavbarBs";
import Footer from "../assets/components/footer/Footer";
import ScrollToTop from "../assets/components/hooks/scrollToTop";

function RootLayout() {
  return (
    <>
      <NavbarBs />
      <ScrollToTop /> 
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
