import styled, { keyframes } from "styled-components";
import { FaChevronDown, FaCircle } from "react-icons/fa";

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
  0%{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ScrollIndicatorContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  cursor: pointer;

  p {
    color: white;
    font-size: 10px;
    font-weight: 300;
    margin-top: 5px;
  }
`;

export const ArrowContainer = styled.div`
  width: 20px;
  height: 40px;
  border: 1px solid white;
  border-radius: 30px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Arrow = styled.div`
  width: 2px;
  background: white;
  height: 8px;
  border-radius: 10px;

  margin-top: 5px;

  animation: ${floatAnimation} 2s ease infinite;
  animation-delay: 1s;
`;
