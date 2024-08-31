import styled from "styled-components";
import "./productDetail.css";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import FiveStarsComp from "../../assets/components/FiveStarsComp";
import { Accordion, Button, Form } from "react-bootstrap";
import { MdOutlineShoppingCart } from "react-icons/md";
import BestSeller from "../../assets/components/BestSeller";
interface ButtonColor {
  color: string;
  flavor: string;
}

const buttonColors: ButtonColor[] = [
  { color: "#E6BC79", flavor: "Bisküvi" },
  { color: "#56321D", flavor: "Çikolata" },
  { color: "#F1D018", flavor: "Muz" },
  { color: "#B64300", flavor: "Salted Caramel" },
  { color: "#7B3F00", flavor: "Choco Nut" },
  { color: "#BA9051", flavor: "Hindistan Cevizi" },
];

const sizeOptions: string[] = ["400GR", "800GR", "1KG"];

const CustomButton = styled.button<{ selected: boolean }>`
  display: flex;
  border: 3px solid ${(props) => (props.selected ? "#2126ab" : "#e5e5e5")};
  padding: 0;
  height: 35px;
  align-items: center;
  position: relative;
  font-weight: 500;
  text-decoration: none;
  margin-left: 2px;
  cursor: pointer;
`;

const TickIcon = styled(TiTick)`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #2126ab;
  color: #fff;
`;

const ProductSizeButton = styled.button<{ selected: boolean }>`
  background-color: white;
  width: 140px;
  border: 3px solid ${(props) => (props.selected ? "#2126ab" : "#e5e5e5")};
  padding: 0;
  align-items: center;
  position: relative;
  font-weight: 500;
  text-decoration: none;
  margin-left: 2px;
  cursor: pointer;
`;

export default function ProductDetailPage() {
  const [selectedFlavor, setSelectedFlavor] = useState<string>(
    buttonColors[0].flavor
  );
  const [selectedSize, setSelectedSize] = useState<string>(sizeOptions[0]);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else if (e.target.value === "") {
      setQuantity(0);
    }
  };

  return (
    <div className="container-md mt-4 mb-5 ">
      <div className="row flex-column flex-md-row">
        <div className="col-12 col-md-6 col-lg-5">
          <div className="d-flex flex-column align-items-center">
            <div className="product-img-container mb-3">
              <img
                className="img-fluid product-detail-img"
                src="/src/assets/images/product-detail-deneme.png"
                alt=""
              />
            </div>
            <div className="w-100 d-none d-md-block d-lg-none mt-3">
              <p className="expiry-date">Son Kullanma Tarihi: 20.02.2022</p>
              <Accordion flush className="pDetails-custom-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="fw-bold">ÖZELLİKLER</span>
                  </Accordion.Header>
                  <Accordion.Body>deneme</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="fw-bold">BESİN İÇERİĞİ</span>
                  </Accordion.Header>
                  <Accordion.Body>deneme 2</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="fw-bold">KULLANIM ŞEKLİ</span>
                  </Accordion.Header>
                  <Accordion.Body>deneme 3</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h4 className="text-center text-lg-start mt-3">Product Detail</h4>
          <div className="text-center text-lg-start mt-1">
            <FiveStarsComp />
          </div>

          <p className="text-muted text-center text-lg-start mt-1">
            EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ
          </p>
          <hr />
          <div className="d-block">
            <p className="fw-bold ">Aroma:</p>
          </div>
          <div className="d-flex flex-wrap flavor-container">
            {buttonColors.map((color) => (
              <CustomButton
                key={color.flavor}
                selected={selectedFlavor === color.flavor}
                className="mx-2 my-2"
                onClick={() => setSelectedFlavor(color.flavor)}
              >
                {selectedFlavor === color.flavor && <TickIcon />}
                <span className="px-3 d-block">{color.flavor}</span>
                <span
                  style={{ backgroundColor: color.color }}
                  className="custom-button-span"
                ></span>
              </CustomButton>
            ))}
          </div>
          <p className="fw-bold mt-2 ms-2">Boyut:</p>
          <div>
            {sizeOptions.map((size) => (
              <ProductSizeButton
                key={size}
                selected={selectedSize === size}
                className="mx-2 my-2 mx-lg-1"
                onClick={() => setSelectedSize(size)}
              >
                {selectedSize === size && <TickIcon />}
                <span className="fw-bold d-block">{size}</span>
                <span className="d-block">16 servis</span>
              </ProductSizeButton>
            ))}
          </div>
          <div className="d-block d-md-none d-lg-block">
            <div className="d-flex justify-content-between align-items-center ms-2   mt-4 ">
              <h3 className="fw-bold my-auto">579 TL</h3>
              <p className="fw-semibold my-auto me-4 pe-lg-4 pe-0">
                32.15 TL / servis
              </p>
            </div>
            <div className="d-flex justify-content-between mt-3  ms-2 ">
              <div className="input-box d-flex">
                <Button
                  variant="light"
                  className="rounded-0"
                  onClick={handleDecrement}
                >
                  -
                </Button>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  value={quantity}
                  className="text-center rounded-0 quantity-input"
                />
                <Button
                  variant="light"
                  className="rounded-0"
                  onClick={handleIncrement}
                >
                  +
                </Button>
              </div>
              <Button variant="dark" className="px-3 px-lg-5 me-3  me-lg-5">
                <span className="fs-6 fs-md-5 fw-bold px-lg-3 d-flex align-items-center">
                  <MdOutlineShoppingCart size={20} className="me-2 " />
                  SEPETE EKLE
                </span>
              </Button>
            </div>
          </div>
          <hr />
          <div className="w-100 order-md-2 d-block d-md-none d-lg-block pe-0 pe-lg-4">
            <p className="expiry-date"> Son Kullanma Tarihi: 20.02.2022</p>
            <Accordion flush className="pDetails-custom-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span className="fw-bold">ÖZELLİKLER</span>
                </Accordion.Header>
                <Accordion.Body>deneme</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="fw-bold">BESİN İÇERİĞİ</span>
                </Accordion.Header>
                <Accordion.Body>deneme 2</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <span className="fw-bold">KULLANIM ŞEKLİ</span>
                </Accordion.Header>
                <Accordion.Body>deneme 3</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block d-lg-none">
        <div className="d-flex justify-content-between align-items-center ms-2   mt-4 "></div>
        <div className="d-flex justify-content-between mt-3  ms-2">
          <div className="d-flex ">
            <div className="input-box d-flex">
              <Button
                variant="light"
                className="rounded-0 py-3"
                onClick={handleDecrement}
              >
                -
              </Button>
              <Form.Control
                onChange={handleChange}
                type="text"
                value={quantity}
                className="text-center rounded-0 quantity-input"
              />
              <Button
                variant="light"
                className="rounded-0 py-3"
                onClick={handleIncrement}
              >
                +
              </Button>
            </div>
            <h3 className="fw-bold my-auto ms-4">579 TL</h3>
            <p className="fw-semibold ms-3 my-auto">32.15 TL / servis</p>
          </div>
          <Button variant="dark" className="px-5 me-3 py-3 ">
            <span className="fs-6 fs-md-5 fw-bold  d-flex align-items-center">
              <MdOutlineShoppingCart size={20} className="me-2 " />
              SEPETE EKLE
            </span>
          </Button>
        </div>
      </div>
      <div className="row mt-5">
        <p className="text-center display-4">SON GÖRÜNTÜLENEN ÜRÜNLER</p>

        <BestSeller />
      </div>
    </div>
  );
}
