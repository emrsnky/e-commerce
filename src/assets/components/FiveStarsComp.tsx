import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const StyledFaStar = styled(FaStar)`
  color: #fdd835;
  font-size: 25px;
`;
export default function FiveStarsComp() {
  return (
    <>
      <StyledFaStar className="mt-1" />
      <StyledFaStar className="mt-1" />
      <StyledFaStar className="mt-1" />
      <StyledFaStar className="mt-1" />
      <StyledFaStar className="mt-1" />
    </>
  )
}
