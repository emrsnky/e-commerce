import "./sliderblaze.css";
import "blaze-slider/dist/blaze.css";
import { useBlazeSlider } from "react-blaze-slider";
import ReviewCard from "../ReviewCard";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
const StyledFaStar = styled(FaStar)`
  color: #fdd835;
`;
export default function SliderBlazer() {
  const elRef = useBlazeSlider({
    all: {
      slidesToShow: 4,
      slidesToScroll: 1,
      loop: true,
      transitionDuration: 700,
      enableAutoplay: true,
      stopAutoplayOnInteraction: true,
    },
    "(max-width: 900px)": {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
    "(max-width: 577px)": {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  });

  return (
    <div className="container py-4">
      <div className="row d-flex">
      
    <div className="App">
      <div className="blaze-slider my-slider" ref={elRef}>
        <div className="blaze-container">
          <div className="blaze-track-container">
          <div className="d-flex row justify-content-lg-between py-3">
            <div className="col-md-6">
            <h5 className="text-uppercase text-secondary">
              Gerçek Müşteri Yorumları
            </h5></div>
            <div className="col-md-6">
            <div className="d-flex align-items-center">
              <StyledFaStar />
              <StyledFaStar />
              <StyledFaStar />
              <StyledFaStar />
              <StyledFaStar />

              <span className="mx-2 text-secondary text-decoration-underline fw-bold">
                198453 Yorum
              </span>
              <div className="controls ms-md-3">
          <button className="blaze-prev">prev</button>
          <button className="blaze-next">next</button>
        </div>
            </div>
            </div>
            <hr className="w-100 mt-3" />
          </div>
          
            <div className="blaze-track ">
              <div>
                <ReviewCard />
              </div>
              <div>
                <ReviewCard />
              </div>
              <div>
                <ReviewCard />
              </div>
              <div>
                <ReviewCard />
              </div>
              <div>
                <ReviewCard />
              </div>
              <div>
                <ReviewCard />
              </div>
              <div>
                <ReviewCard />
              </div>
              <div>
                <ReviewCard />
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
    </div>
    </div>
  );
}
