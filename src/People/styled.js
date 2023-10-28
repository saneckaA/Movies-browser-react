import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   width: 1368px;
   max-width: calc(100% - 2 * 12px);
   margin: auto;
   @media (max-width: 767px) {
      width: calc(100vw - 32px);
   }
`;

export const Title = styled.div`
   font-weight: 600;
   font-size: 36px;
   line-height: 43.2px;
   color: ${({theme}) => theme.infoTextColor};
   padding-top: 40px;
   @media (max-width: 767px) {
      font-size: 20px;
      line-height: 24px;
      padding-top: 20px;
      margin-left: 16px;
   }
`;

export const FamousPeople = styled.div`
   margin-top: 20px;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
   grid-gap: 24px;
   @media (max-width: 1200px) {
      grid-template-columns: repeat(auto-fill, 136px);
      width: auto;
      justify-content: center;
   }
`;

export const Person = styled(Link)`
   width: 208px;
   height: 359px;
   background: ${({theme}) => theme.infoContainerColor};
   display: flex;
   flex-direction: column;
   box-shadow: ${({theme}) => theme.boxShadowColor};
   text-decoration: none;
   border: 1px solid white;
   transition: 0.3s all;
    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
    }
   @media (max-width: 1200px) {
      width: 136px;
      height: 245px;
      transition: none;
   }
`;

export const Image = styled.div`
   width: 177px;
   height: 264px;
   background: ${({theme}) => theme.backgroundImage};
   margin-top: 14px;
   margin-left: 14px;
   box-shadow: ${({theme}) => theme.boxShadowColor};
   img {
      width: 177px;
      height: 264px;
      margin-bottom: 14px;
    }
   @media (max-width: 1200px) {
      width: 120px;
      height: 178px;
      margin: 7px 7px 7px 7px;
      img {
         width: 120px;
         height: 178px;
      }
   }
`;

export const Name = styled.div`
   font-weight: 500;
   font-size: 22px;
   line-height: 28.6px;
   text-align: center;
   color: ${({theme}) => theme.infoTextColor};
   margin-top: 12px;
   @media (max-width: 1200px) {
      font-size: 14px;
      line-height: 18.2px;
   }
`;