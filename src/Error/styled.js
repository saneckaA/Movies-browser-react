import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   width: 1368px;
   max-width: calc(100% - 2*12px);
   margin: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   @media (max-width: 767px) {
    width: calc(100vw-32px);
   }
`;

export const Image = styled.img`

`;

export const Title = styled.div`
   font-weight: 600;
   font-size: 36px;
   line-height: 43.2px;
   margin-bottom: 20px;
   color: ${({theme}) => theme.infoTextColor};
   @media (max-width: 767px) {
    font-size: 16px;
    width: auto;
   }
`;

export const SubTitle = styled.div`
   font-weight: 500;
   font-size: 22px;
   line-height: 28.6px;
   margin-bottom: 20px;
   text-align: center;
   color: ${({theme}) => theme.infoTextColor};
   @media (max-width: 767px) {
    font-size: 12px;
    width: auto;
   }
`;

export const Button = styled(Link)`
 button {
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    color: white;
    width: 181px;
    height: 51px;
    border-radius: 5px;
    padding: 16px 24px 16px 24px;
    background: rgba(0, 68, 204, 1);
    border: none;
    &:hover {
        background: rgba(0, 68, 294, 0.8);
    }
 }
`;