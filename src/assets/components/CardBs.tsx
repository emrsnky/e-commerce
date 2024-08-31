import Card from "react-bootstrap/Card";
import styled from "styled-components";
import './cardBs.css';
import { FaStar } from "react-icons/fa";

const StyledFullStar = styled(FaStar)`
  color: #fdd835;
`;

const StyledEmptyStar = styled(FaStar)`
  color: #e0e0e0;
`;

const DiscountedPrice = styled.span`
  color: red;
  text-decoration: line-through;
  margin-right: 8px;
`;

const NormalPrice = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

const DiscountedPriceBox = styled.div`
  width: 60px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 16px;
  background-color: #ED2727;
  color: #fff;
  position: absolute;
  top: -20px;
  right: -1px;
`

interface CardProps {
  name: string;
  short_explanation: string;
  
    profit?: null;
    total_price: number;
    discounted_price?: number | null;
    price_per_servings?: number;
    discount_percentage?: number | null;
 
  photo_src: string;
  comment_count: number;
  average_star: number;
}

export default function CardBs(props: CardProps) {
  const maxStars = 5;

  const renderStars = (rating: number = 0) => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars.push(<StyledFullStar key={i} />);
      } else if (i - rating < 1) {
        stars.push(
          <StyledFullStar key={i} style={{ clipPath: "inset(0 50% 0 0)" }} />
        );
      } else {
        stars.push(<StyledEmptyStar key={i} />);
      }
    }
    return stars;
  };

  const imgSrc = `https://fe1111.projects.academy.onlyjs.com/${props.photo_src}`;

  return (
    <Card
      style={{ width: "12rem" , height: "24rem", backgroundColor: "inherit" }}
      className="text-center mx-auto border-0 flex-column"
    >
      <div className="position-relative">
       {props.discount_percentage? <DiscountedPriceBox> <span className="d-block fw-bold fs-5">%25</span> <span style={{fontSize:"0.7rem"}} >İNDİRİM</span> </DiscountedPriceBox>:null} 
      <Card.Img
        variant="top"
        className="img-fluid best-seller-img"
        src={imgSrc}
        
      />
      </div>
      <Card.Body className="mb-0">
        <Card.Title className="fw-bold  mb-0" >
          {props.name}
        </Card.Title>
        <Card.Text className="text-muted fs-6 mb-0" >
          {props.short_explanation}
        </Card.Text>
        <div>{renderStars(props.average_star)}</div>
        </Card.Body>
        <div className="card-bottom">
        <Card.Text className="fs-6 mb-0">
          {props.comment_count} Yorum
        </Card.Text>
        <Card.Text className="fs-6 mt-0">
          {props.discounted_price ? (
            <>
              <DiscountedPrice>{props.discounted_price} TL</DiscountedPrice>
              <NormalPrice>{props.discounted_price} TL</NormalPrice>
            </>
          ) : (
            <NormalPrice>{props.total_price} TL</NormalPrice>
          )}
        </Card.Text>
        </div>
     
    </Card>
  );
}
