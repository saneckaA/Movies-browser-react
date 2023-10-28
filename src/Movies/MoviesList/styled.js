import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   width: 1368px;
   max-width: calc(100% - 2*12px);
   margin: auto;
   @media (max-width: 767px) {
    width: calc(100vw-32px);
   }
`;

export const ContainerTitle = styled.div`
   font-weight: 600;
   font-size: 36px;
   line-height: 43.2px;
   padding-top: 56px;
   padding-bottom: 20px;
   color: ${({ theme }) => theme.infoTextColor};
   @media (max-width: 767px) {
    font-size: 18px;
    line-height: 21.6px;
    padding-top: 25px;
   }
`;

export const MoviesBar = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
   grid-gap: 24px;
   @media (max-width: 767px) {
      grid-template-columns: repeat(auto-fill, 324px);
      justify-content: center;
      grid-gap: 16px;
   }
   @media (max-width: 1200px) {
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, 324px);
    justify-content: center;
   }
`;

export const Movie = styled(Link)`
   width: 324px;
   height: 700px;
   border-radius: 5px;
   border: 0.5px solid white;
   background: ${({ theme }) => theme.infoContainerColor};
   box-shadow: ${({ theme }) => theme.boxShadowColor};
   text-decoration: none;
   color: ${({ theme }) => theme.infoTextColor};
   transition: 0.3s all;
    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
   }

   @media (max-width: 767px) {
    width: auto;
    height: auto;
    transition: none;
    display: flex;
    flex-direction: row;
   }
`;

export const Poster = styled.img`
    width: 292px;
    height: 434px;
    margin-top: 16px;
    margin-left: 16px;
    margin-bottom: 16px;
    border-radius: 5px;
    background: ${({ theme }) => theme.backgroundImage};
   @media (max-width: 767px) {
      width: 114px;
      height: 180px;
   }
`;

export const Descirption = styled.div`
   width: 292px;
   min-height: 105px;
   margin-left: 16px;
   display: flex;
   position: relative;
   flex-direction: column;
   @media (max-width: 767px) {
    width: auto;
    height: auto;
    margin: 16px 16px 16px 16px;
   }
`;

export const MovieTitle = styled.h2`
   font-size: 22px;
   font-weight: 600;
   line-height: 29px;
   margin-top: -5px;
   color: ${({ theme }) => theme.infoTextColor};
   @media (max-width: 767px) {
    font-size: 16px;
    line-height: 20.8px;
    margin-top: 2px;
   }
`;

export const MovieYear = styled.div`
   font-size: 16px;
   font-weight: 400;
   line-height: 24px;
   margin-top: -10px;
   color: ${({ theme }) => theme.greyText};
   @media (max-width: 767px) {
    font-size: 13px;
    line-height: 16.9px;
    margin-top: -12px;
    color: rgba(126, 131, 154, 1);
   }
`;

export const Rating = styled.div`
   min-width: 140px;
   height: 24px;
   display: flex;
   flex-direction: row;
   gap: 12px;
   margin-top: 24px;
   padding-bottom: 16px;
   position: absolute;
   top: 170px;
   @media (max-width: 767px) {
    top: 150px;
    height: 14px;
    width: auto;
    margin-top: 5px;
    gap: 8px;
   }
`;

export const Icon = styled.div`
   margin-top: -2px;
   @media (max-width: 767px) {
    svg {
        width: 16px;
        height: 16px;
    } 
   }
   `;

export const Value = styled.div`
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   @media (max-width: 767px) {
    font-size: 13px;
    line-height: 16.9px;
   }
`;

export const Votes = styled.div`
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: ${({ theme }) => theme.greyText};
   @media (max-width: 767px) {
    font-size: 13px;
    line-height: 16.9px;
   }
`;