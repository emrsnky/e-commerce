import "./navbar.css";
import { Button, Container, Form, InputGroup, Nav, Row } from "react-bootstrap";
import { CiFaceSmile, CiUser } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineShoppingCart } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import MobileNavbar from "./MobileNavbar";
import CustomDropdown from "./CustomDropdown";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavbarBs() {
  return (
    <>
    <div className="nav-main-container">
      <MobileNavbar />
      
      <Container className="d-none d-md-block px-0 px-lg-5 ">
        <Row className="pt-3 d-flex justify-content-between align-items-center ">
          <div className="col-3 justify-content-lg-end justify-content-md-start">
            <Link to={"/"}>
              <img
                src="/src/assets/images/logo.png"
                alt="logo"
                width={170}
                height={40}
              />
            </Link>
          </div>
          <div className="col-8 d-flex justify-content-end">
            <InputGroup className="w-50">
              <Form.Control
                className="custom-outline-secondary w-75"
                placeholder="Aradığınız ürünü yazınız..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="secondary" id="button-addon2">
                ARA
              </Button>
            </InputGroup>

            <MDBDropdown
              className="mx-2 hesap-dropdown"
              renderMenuOnMount={true}
            >
              <MDBDropdownToggle tag="a" className="btn btn-outline-secondary">
                <CiUser size={20} fontWeight={"bold"} className="mb-1" /> HESAP
              </MDBDropdownToggle>
              <MDBDropdownMenu className="mdn-dropdown">
                <MDBDropdownItem link><Link to={"/login"} className="text-decoration-none text-dark">Giriş Yap </Link></MDBDropdownItem>
                <hr />
                <MDBDropdownItem link>Üye Ol</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>

            <Button variant="secondary" className="d-flex align-items-center">
              <span className="cart-span">
                {" "}
                <span className="cart-count">0</span>{" "}
                <MdOutlineShoppingCart size={20} className="me-1" />
              </span>{" "}
              SEPET
            </Button>
          </div>
        </Row>
      </Container>

      <div className="py-2 mt-3 container-fluid text-white bg-dark fw-medium d-none d-md-block ">
        <div className="container px-0 px-lg-5 d-flex justify-content-between">
          <CustomDropdown
            triggerText={
              <span>
                <Nav.Link as={Link} to="/category">
                  PROTEIN <FaChevronDown />
                </Nav.Link>
              </span>
            }
          />

          <CustomDropdown
            triggerText={
              <span>
                <Nav.Link as={Link} to="/category">
                  SPOR GIDALARI <FaChevronDown />
                </Nav.Link>
              </span>
            }
          />

          <CustomDropdown
            triggerText={
              <span>
                <Nav.Link as={Link} to="/category">
                  SAĞLIK <FaChevronDown />
                </Nav.Link>
              </span>
            }
          />

          <CustomDropdown
            triggerText={
              <span>
                <Nav.Link as={Link} to="/category">
                  GIDA <FaChevronDown />
                </Nav.Link>
              </span>
            }
          />

          <CustomDropdown
            triggerText={
              <span>
                <Nav.Link as={Link} to="/category">
                  VİTAMİN <FaChevronDown />
                </Nav.Link>
              </span>
            }
          />

          <Nav.Link as={Link} to="/category">
            TÜM ÜRÜNLER
          </Nav.Link>
        </div>
      </div>

      <div className="container-fluid nav-slogan d-none d-md-block">
        <div className="container container-md-fluid d-flex justify-content-around py-2">
          <div className="d-flex justify-content-center align-items-center">
            <LiaShippingFastSolid size={16} className="me-1" />
            <span className="catchword"> AYNI GÜN KARGO </span> -
            <span className="catchword-info">16:00'DAN ÖNCEKİ SPARİŞLERDE</span>
          </div>
          <div className="d-flex justify-content-center align-items-center mx-md-1">
            <CiFaceSmile size={16} className="me-1" />
            <span className="catchword"> ÜCRETSİZ KARGO </span> -
            <span className="catchword-info">100TL ÜZERİ SPARİŞLERDE</span>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <VscWorkspaceTrusted size={16} className="me-1" />
            <span className="catchword">GÜVENLİ ALIŞVERİŞ</span> -
            <span className="catchword-info">1.000.000+ MUTLU MÜŞTERİ</span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
