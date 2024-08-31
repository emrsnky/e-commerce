import "./homepage.css";
import SliderBlazer from "../../assets/components/slider/SliderBlaze";
import BestSeller from "../../assets/components/BestSeller";


export default function HomePage() {
  return (
    <>
      <div className="hero-top-div">
        <img
          src="/src/assets/images/OJSbanner2.png"
          className="  mt-2 mt-md-0 hero-top-img"
          alt=""
        />
      </div>

      <div className="container-md mt-3">
        <div className="row gy-3 gx-3">
          <div className="  col-6 col-md-4 d-flex">
            <img
              src="/src/assets/images/hero-protein.png"
              alt="protein foto"
              className="img-fluid mx-auto"
              width={"385px"}
              height={160}
            />
          </div>
          <div className="  col-6 col-md-4 d-flex">
            <img
              src="/src/assets/images/hero-vitaminler.png"
              alt="vitaminler"
              className="img-fluid mx-auto"
              width={385}
              height={160}
            />
          </div>
          <div className="  col-6 col-md-4 d-flex">
            <img
              src="/src/assets/images/hero-saglik.png"
              alt="Sağlık Ürünleri"
              className="img-fluid mx-auto"
              width={385}
              height={160}
            />
          </div>

          <div className="  col-6 col-md-4 d-flex">
            <img
              src="/src/assets/images/hero-sporGida.png"
              alt="Spor Gıdaları"
              className="img-fluid mx-auto"
              width={385}
              height={160}
            />
          </div>
          <div className="  col-6 col-md-4 d-flex">
            <img
              src="/src/assets/images/hero-gida.png"
              alt="Gıda Ürünleri"
              className="img-fluid mx-auto"
              width={385}
              height={160}
            />
          </div>
          <div className="  col-6 col-md-4 d-flex">
            <img
              src="/src/assets/images/hero-allProducts.png"
              alt=" Tüm Ürünler "
              className="img-fluid mx-auto"
              width={385}
              height={160}
            />
          </div>
        </div>
      </div>
      <div className="container-md">
        <h2
          className="text-center text-uppercase py-4 mt-1"
          style={{ color: "#222222" }}
        >
          en çok satanlar
        </h2>
        
        <div className="row  d-flex align-items-center justify-content-lg-between">
          <BestSeller />
          
        </div>
       
      </div>
      <div className="hero-bottom-div">
        <img
          className="hero-bottom-logo"
          src="/src/assets/images/LOGO_Siyah.png"
          alt=""
        />
        <img
          className="img-fluid hero-bottom-img"
          src="/src/assets/images/hero-bottom-img.png"
          alt="adam resmi"
        />
      </div>

     <SliderBlazer />
    </>
  );
}
