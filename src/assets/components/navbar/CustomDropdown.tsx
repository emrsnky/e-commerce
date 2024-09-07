import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface DropdownProps {
  triggerText: React.ReactNode;
}

const DropdownOuterContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 6.2rem;
  left: 0;
  width: 100vw;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.167);
  z-index: 1;
  @media screen and (max-width: 769px) {
    width: 50vw;
    height: 60vh;
    top: 15.5%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    left: 50%;
  }
  @media screen and (max-width: 1200px) {
  }
`;

const DropdownContainer = styled.div`
  color: white;
  position: relative;
  display: inline-block;
`;

const DropdownTrigger = styled.div<{ isOpen: boolean }>`
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: ${({ isOpen }) => (isOpen ? "underline" : "none")};
  text-decoration-color: ${({ isOpen }) => (isOpen ? "white" : "inherit")};
  transition: text-decoration-color 0.5s ease;

  &:hover {
    text-decoration: underline;
    text-decoration-color: white;
  }

  svg {
    transition: transform 0.5s ease;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  color: black;
  top: 50%;
  left: 50%;
  width: 60vw;
  height: 70vh;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10;
  overflow: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 1s ease, transform 1s ease;
`;

const BestSellerContainer = styled.div`
  width: 300px;
  height: 100%;
  background-color: #e5e5e5;
  float: left;
`;
const BestSellerContent = styled.div`
  width: 75%;
  height: auto;
  display: flex;
  align-items: center;
  margin-left: 0.7rem;
  box-shadow: 0 1px 1px rgb(212, 207, 207, 0.5);
  position: relative;
  z-index: 1;
`;
const BestSellerStars = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
`;
const BestSellerImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 2px;
`;
const BestSellerName = styled.p`
  margin-left: 5px;
  font-size: 0.8rem;
  font-weight: 600;
`;
const StyledFullStar = styled(FaStar)`
  color: #fdd835;
`;

const StyledEmptyStar = styled(FaStar)`
  color: white;
`;

interface BestSellerProps {
  name: string;
  short_explanation: string;
  price_info: {
    profit: null;
    total_price: number;
    discounted_price: number | null;
    price_per_servings: number;
    discount_percentage: number | null;
  };
  photo_src: string;
  comment_count: number;
  average_star: number;
}

async function fetchBestSeller() {
  const response = await fetch(
    "https://fe1111.projects.academy.onlyjs.com/api/v1/products/best-sellers"
  );
  const jsonData = await response.json();
  return jsonData.data as BestSellerProps[];
}

const CustomDropdown = ({ triggerText }: DropdownProps) => {
  const [bestSeller, setBestSeller] = useState<BestSellerProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBestSeller();
      setBestSeller(data);
    };

    fetchData();
  }, []);

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

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <DropdownContainer
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DropdownTrigger isOpen={isOpen}>{triggerText}</DropdownTrigger>
      <DropdownOuterContainer isOpen={isOpen}>
        <DropdownContent isOpen={isOpen}>
          <BestSellerContainer>
            <h4 className="text-center mt-2">EN ÇOK SATANLAR</h4>
            {bestSeller.map((product, index) => {
              const imgSrc = `https://fe1111.projects.academy.onlyjs.com/${product.photo_src}`;
              return (
                <NavLink as={Link} to={`/product/${product.name}`} key={index}>
                  <BestSellerContent
                    className="mb-0 mb-md-1 mb-lg-3"
                    key={index}
                  >
                    <BestSellerImg src={imgSrc} className="d-none d-lg-block" />

                    <BestSellerStars>
                      <BestSellerName>{product.name}</BestSellerName>
                      <div>
                        {" "}
                        {renderStars(product.average_star)}{" "}
                        {product.comment_count} Yorum
                      </div>
                    </BestSellerStars>
                  </BestSellerContent>
                </NavLink>
              );
            })}
          </BestSellerContainer>
        </DropdownContent>
      </DropdownOuterContainer>
    </DropdownContainer>
  );
};

export default CustomDropdown;
