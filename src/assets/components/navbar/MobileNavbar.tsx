import { CiSearch } from "react-icons/ci";
import "./navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoImg from "../../images/logo.png";
import SidebarContent from "./SidebarContent";
export default function MobileNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container-sm d-md-none d-block">
        <div className="row d-flex justify-content-between align-items-center py-2">
          <div className="col-3">
            <Button variant="outline" onClick={handleShow}>
            <GiHamburgerMenu size={30} />
            </Button>
          </div>
          <div className="col-6 text-center">
            <Link to={"/"}>
            <img
              src={LogoImg}
              alt="logo"
              width={140}
              height={30}
            /></Link>
          </div>
          <div className="col-3 text-end text-primary">
            <Button variant="outline text-primary">
          <span className="cart-span"> <span className="cart-count">0</span> <MdOutlineShoppingCart size={30} /></span>
          </Button>
          </div>
        </div>

        <div className=" position-relative w-100">
          <CiSearch size={20} className="mobile-search-icon" />
          <input
            type="text"
            placeholder="Aradıgınız ürünü yazınız"
            className="w-100 py-2 mb-2 fst-italic text-uppercase mobile-input"
          />
        </div>
      </div>
      {/* OFFCANVAS */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src={LogoImg}
              alt="logo"
              width={100}
              height={30}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarContent/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
