import { useState } from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Button, Collapse } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFaStar = styled(FaStar)`
  color: #fdd835;
`;

export default function Footer() {
  const [openAccordion, setOpenAccordion] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const toggleAccordion = (index: number) => {
    setOpenAccordion((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <>
      <MDBFooter
        style={{ backgroundColor: "#222222", color: "#999999" }}
        className="footer-section text-center text-lg-start"
      >
        <section className="py-5">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-5 col-sm-11 mb-3">
                <div className="d-flex">
                  <StyledFaStar className="mt-1" />
                  <StyledFaStar className="mt-1" />
                  <StyledFaStar className="mt-1" />
                  <StyledFaStar className="mt-1" />
                  <StyledFaStar className="mt-1" />
                  <span className="slogan-text">(140.000+)</span>
                </div>
              </div>
              <div className="col-md-5 d-none d-md-block"></div>
            </div>
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-5 col-sm-11 mb-4 text-start mb-md-0 fs-4 text-white lh-lg">
                LABORATUVAR TESTLİ ÜRÜNLER{" "}
                <br className="d-block d-md-none d-lg-block" /> AYNI GÜN &
                ÜCRETSİZ KARGO <br className="d-block d-md-none d-lg-block" />{" "}
                MEMNUNİYET GARANTİSİ
              </div>
              <div className="col-md-5 col-sm-11 text-white text-start">
                <p className="lh-lg">
                  200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi
                  seveceğinize eminiz. Eğer herhangi bir sebeple memnun
                  kalmazsanız, bizimle iletişime geçtiğinizde çözüme
                  kavuşturacağız.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="d-none d-md-block">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 fst-italic text-white fs-5">
                  ojs <br />
                  NUTRITION
                </h6>
                <Link
                  to="/contact"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  İletişim
                </Link>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Hakkımızda
                </a>
                <Link
                  to={"/FAQ"}
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Sıkça Sorulan Sorular
                </Link>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  KVKK
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Çalışma Saatlerimiz
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Satış Sözleşmesi
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Garanti ve İade Koşulları
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Gerçek Müşteri Yorumları
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Blog
                </a>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-white fw-bold mb-4 fs-5">Kategoriler</h6>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Spor Gıdaları
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Sağlık
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Gıda
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Vitamin
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Aksesuar
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Tüm Ürünler
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Paketler
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Lansmana Özel Fırsatlar
                </a>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-white fs-5 fw-bold mb-4">
                  Popüler Ürünler
                </h6>
                
                <Link
                  to={"/productDetail"}
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Whey Protein
                </Link>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Cream of Rice
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Creatine
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  BCAA+
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Pre-Workout
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Fitness Paketi
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Collagen
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  Günlük Vitamin Paketi
                </a>
                <a
                  href="#!"
                  className="text-reset d-block text-decoration-none mb-1"
                >
                  ZMA
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className="container d-sm-block d-md-none">
          <div className="row-column fw-bolder ms-4 mb-5 pb-5">
            <div className="col-5 d-flex mb-4 justify-content-start">
              <img src="/src/assets/images/LOGO_Beyaz.png" alt="logo" />
            </div>
            <div className="col-5 text-start">
              <Button
                onClick={() => toggleAccordion(0)}
                aria-controls="example-collapse-text-0"
                aria-expanded={openAccordion[0]}
                variant="link"
                className="text-white text-start p-0 text-decoration-none d-flex align-items-center"
              >
                {openAccordion[0] ? (
                  <BsDashLg className="me-2" />
                ) : (
                  <BsPlusLg className="me-2" />
                )}{" "}
                OJS NUTRITION
              </Button>
              <Collapse in={openAccordion[0]}>
                <div id="example-collapse-text-0">
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    İletişim
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Hakkımızda
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Sıkça Sorulan Sorular
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    KVKK
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Çalışma Saatlerimiz
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Satış Sözleşmesi
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Garanti ve İade Koşulları
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Gerçek Müşteri Yorumları
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Blog
                  </a>
                </div>
              </Collapse>
            </div>
            <div className="col-5 text-start my-2">
              <Button
                onClick={() => toggleAccordion(1)}
                aria-controls="example-collapse-text-1"
                aria-expanded={openAccordion[1]}
                variant="link"
                className="text-white text-start p-0 text-decoration-none d-flex align-items-center"
              >
                {openAccordion[1] ? (
                  <BsDashLg className="me-2" />
                ) : (
                  <BsPlusLg className="me-2" />
                )}{" "}
                Kategoriler
              </Button>
              <Collapse in={openAccordion[1]}>
                <div id="example-collapse-text-1">
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Spor Gıdaları
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Sağlık
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Gıda
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Vitamin
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Aksesuar
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Tüm Ürünler
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Paketler
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Lansmana Özel Fırsatlar
                  </a>
                </div>
              </Collapse>
            </div>
            <div className="col-5 text-start ">
              <Button
                onClick={() => toggleAccordion(2)}
                aria-controls="example-collapse-text-2"
                aria-expanded={openAccordion[2]}
                variant="link"
                className="text-white text-start p-0 text-decoration-none d-flex align-items-center"
              >
                {openAccordion[2] ? (
                  <BsDashLg className="me-2" />
                ) : (
                  <BsPlusLg className="me-2" />
                )}
                Popüler Ürünler
              </Button>
              <Collapse in={openAccordion[2]}>
                <div id="example-collapse-text-2">
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Whey Protein
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Cream of Rice
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Creatine
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    BCAA+
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Pre-Workout
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Fitness Paketi
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    Collagen
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                  <p className="d-block"> Günlük Vitamin Paketi</p> 
                  </a>
                  <a
                    href="#!"
                    className="text-reset d-block text-decoration-none mb-2"
                  >
                    ZMA
                  </a>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
        <div className="text-center text-muted text-white-50 p-4">
          <p>Copyright © - Tüm Hakları Saklıdır.</p>
        </div>
      </MDBFooter>
    </>
  );
}
