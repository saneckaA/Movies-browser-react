import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   width: 1368px;
   max-width: calc(100% - 2*12px);
   margin: auto;
   display: flex;
   flex-direction: column;
   gap: 40px;
   @media (max-width: 767px) {
      max-width: calc(100vw - 32px);
   }
`;

export const Details = styled.div`
   margin-top: 50px;
   display: flex;
   flex-direction: row;
   gap: 24px;
   background: ${({theme}) => theme.infoContainerColor};
   border: 1px solid white;
   @media (max-width: 767px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;
      width: auto;
      margin: 16px 16px 0px 16px;
   }
`;

export const Image = styled.img`
   width: 399px;
   height: 564px;
   margin-top: 40px;
   margin-left: 40px;
   margin-bottom: 40px;
   background: ${({theme}) => theme.backgroundImage};
   @media (max-width: 767px) {
      width: 116px;
      height: 163px;
      margin: 16px 0px 0px 16px;
   }
`;

export const Information = styled.div`
   width: 849px;
   height: auto;
   margin-top: 40px;
   margin-right: 40px;
   margin-bottom: 40px;
   display: flex;
   flex-direction: column;
   gap: 24px;
   @media (max-width: 767px) {
      margin: 16px 16px 0px 0px;
      gap: 4px;
      width: 126px;
   }
`;

export const Name = styled.div`
   font-weight: 600;
   font-size: 36px;
   line-height: 43.2px;
   color: ${({theme}) => theme.infoTextColor};
   @media (max-width: 767px) {
      font-size: 14px;
      line-height: 18.2px;
   }
`;

export const Birth = styled.div`
   display: flex;
   flex-direction: column;
   gap: 12px;
   @media (max-width: 767px) {
      gap: 8px;
      flex-wrap: wrap;
   }
`;

export const Date = styled.div`
   font-weight: 400;
   font-size: 18px;
   line-height: 21.6px;
   color: ${({theme}) => theme.infoTextColor};
   span {
    color: ${({theme}) => theme.greyText};
   }
   @media (max-width: 767px) {
      font-size: 12px;
      line-height: 14.4px;
      display: flex;
      flex-wrap: wrap;
   }
`;

export const Place = styled(Date)`
`;

export const Overview = styled.div`
   font-weight: 400;
   font-size: 20px;
   line-height: 32px;
   color: ${({theme}) => theme.infoTextColor};
   text-align: justify;
   @media (max-width: 767px) {
      display: none;
   }
`;

export const MediaOverview = styled.div`
   display: none;
   @media (max-width: 767px) {
      font-size: 14px;
      line-height: 22.4px;
      display: inline;
      grid-column-start: 1;
      grid-column-end: 3;
      margin: 0px 16px 16px 16px;
      text-align: justify;
   }
`;

export const MoviesCast = styled.div`
   display: flex;
   flex-direction: column;
   gap: 24px;
   @media (max-width: 1200px) {
      gap: 16px;
      width: auto;
   }
`;

export const HeaderName = styled.div`
   font-weight: 600;
   font-size: 36px;
   line-height: 43.2px;
   @media (max-width: 767px) {
     font-size: 20px;
     line-height: 24px;
     margin-left: 16px;
   }
`;

export const Movies = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
   grid-gap: 24px;
   @media (max-width: 1200px) {
   grid-template-columns: repeat(auto-fill, 288px);
   gap: 16px;
   justify-content: center;
   }
`;

export const Movie = styled(Link)`
   background: ${({theme}) => theme.infoContainerColor};
   position: relative;
   width: 324px;
   height: auto;
   border-radius: 5px;
   border: 1px solid white;
   box-shadow: ${({theme}) => theme.boxShadowColor};
   text-decoration: none;
   color: ${({theme}) => theme.infoTextColor};
   transition: 0.3s all;
    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
    }
   @media (max-width: 1200px) {
    width: 288px;
    height: auto;
    display: flex;
    flex-direction: row;
   }
`;

export const Poster = styled.div`
   width: 292px;
   height: 434px;
   margin-top: 16px;
   margin-left: 16px;
   margin-bottom: 16px;
   background: ${({theme}) => theme.backgroundImage};

  img {
    width: 292px;
    height: auto;
   }
   @media (max-width: 1200px) {
    width: 114px;
    height: 169px;
    img {
    width: 114px;
    height: 169px;
   }
   }
`;

export const Description = styled.div`
    width: 292px;
   min-height: 105px;
   margin-left: 16px;
   margin-bottom: 16px;
   display: flex;
   flex-direction: column;
   @media (max-width: 1200px) {
    width: 126px;
    min-height: 128px;
    margin-top: 16px;
    margin-bottom: 16px;
   }
`;

export const MovieTitle = styled.div`
   font-size: 22px;
   font-weight: 500;
   line-height: 29px;
   margin-top: -5px;
   @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 20.8px;
    margin-top: 2px;
   }
`;

export const CharacterAndYear = styled.div`
   font-size: 16px;
   font-weight: 400;
   line-height: 24px;
   color: ${({theme}) => theme.greyText};
   margin-top: 8px;
   @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 16.8px;
    margin-top: 2px;
   }
`;

export const Rating = styled.div`
   width: auto;
   height: 24px;
   display: flex;
   flex-direction: row;
   gap: 12px;
   margin-top: 24px;
   padding-bottom: 16px;
   img {
      width: 16px;
      height: 16px;
   }
   @media (max-width: 1200px) {
    height: 14px;
    min-width: 80px;
    margin-top: 5px;
    gap: 8px;
   }
`;

export const Icon = styled.div`
   margin-top: -2px;
   @media (max-width: 1200px) {
    svg {
        width: 16px;
        height: 16px;
    } 
   }
`;

export const Average = styled.div`
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   @media (max-width: 1200px) {
    font-size: 13px;
    line-height: 16.9px;
   }
`;

export const Votes = styled.div`
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: ${({theme}) => theme.greyText};
   @media (max-width: 1200px) {
    font-size: 13px;
    line-height: 16.9px;
   }
`;

export const MoviesCrew = styled(MoviesCast)`

`;


