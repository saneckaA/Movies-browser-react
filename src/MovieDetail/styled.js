import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainPoster = styled.div`
   color: white;
   background: black;
   background-image: linear-gradient(
      270deg,
      #000000 14.11%,
      rgba(0, 0, 0, 0.873268) 15.08%,
      rgba(0, 0, 0, 0.720529) 16.51%,
      rgba(0, 0, 0, 0.294577) 19.99%,
      rgba(0, 0, 0, 0.159921) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000000 13.6%,
      rgba(0, 0, 0, 0.984059) 14.58%,
      rgba(0, 0, 0, 0.967732) 15.44%,
      rgba(0, 0, 0, 0.865569) 16.3%,
      rgba(0, 0, 0, 0.230315) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    ),
    url(${({ src }) => src});
  background-size: 1920px 770px, 1920px 770px, 1920px 770px, 1920px 770px,
    1368px 769px;
  background-repeat: no-repeat;
  background-position: center;
  
  @media (max-width: 1200px) {
   background-size: 1040px 400px, 1040px 400px, 1040px 400px, 1040px 400px,
      776px 400px;
  }
  @media (max-width: 767px) {
   width: 100%;
   background-size: 450px 188px, 450px 188px, 450px 188px, 450px 188px,
      350px 188px;
  }

`;

export const TitleAndRating = styled.div`
   width: 1368px;
   height: 710px;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   padding-left: 10px;
   padding-bottom: 56px;
   margin-left: auto;
   margin-right: auto;
   @media (max-width: 1200px) {
    width: 100%;
    height: 300px;
   }
 
`;

export const MovieTitle = styled.h1`
   color: ${({ theme }) => theme.movieDetailBcgText};
   font-weight: 600;
   font-size: 64px;
   line-height: 76.8px;
   z-index: 1;
   @media (max-width: 1200px) {
     font-size: 28px;
     line-height: 28.8px;
   }
`;

export const RatingBcg = styled.div`
   display: flex;
     flex-direction: column;
     gap: 12px;
`;

export const IconBcg = styled.div`
    @media (max-width: 767px) {
      svg {
         width: 18px;
         height: 18px;
      }
   }
`;

export const AverageBcg = styled.div`
   color: ${({ theme }) => theme.textColor};
   font-weight: 500;
   font-size: 16px;
   line-height: 19.2px;

   span {
   font-weight: 600;
   font-size: 30px;
   line-height: 39px;
   }
   @media (max-width: 767px) {
      font-size: 14px;
      line-height: 18.2px;
      span {
         font-size: 14px;
      line-height: 18.2px;
      }
   }
`;

export const VotesBcg = styled.div`
   color: ${({ theme }) => theme.movieDetailBcgText};
   font-weight: 500;
   font-size: 16px;
   line-height: 19.2px;
   @media (max-width: 767px) {
      font-size: 14px;
      line-height: 18.2px;
   }
`;

export const InfoBar = styled.div`
   width: 1368px;
   max-width: calc(100% - 2*12px);
   margin-top: 50px;
   display: flex;
   margin-left: auto;
   margin-right: auto;
   flex-direction: column;
   align-content: center;
   gap: 40px;
   @media (max-width: 1200px) {
      width: 100%;
   }
`;

export const Details = styled.div`
   background: ${({theme}) => theme.infoContainerColor};
   width: 1368px;
   box-shadow: ${({theme}) => theme.boxShadowColor};
   display: flex;
   flex-direction: row;
   gap: 40px;
   border: 1px solid white;
   height: auto;
   @media (max-width: 1200px) {
   width: 100%;
  }
   @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 16px;
    width: auto;
    margin: 0px 20px 20px 20px;
   }
`;

export const Poster = styled.img`
   margin-top: 40px;
   margin-left: 40px;
   margin-bottom: 40px;
   background: ${({theme}) => theme.backgroundImage};
   height: 464px;
   height: 464px;
   width: 312px;
   border-radius: 5px;
   border: 1px solid white;
  @media (max-width: 767px) {
   height: 169px;
   width: 114px;
   margin: 16px 0px 0px 16px;   
  }
`;

export const Informations = styled.div`
   width: 939px;
   height: 464px;
   margin-top: 40px;
   margin-right: 40px;
   margin-bottom: 40px;
   display: flex;
   flex-direction: column;
   gap: 20px;
   @media (max-width: 1200px) {
      gap: 4px;
      width: auto;
      height: auto;
   }
   @media (max-width: 767px) {
      margin: 16px 16px 0px 0px;
   }
`;

export const Title = styled.div`
    font-weight: 600;
    font-size: 36px;
    line-height: 43.2px;
    color: ${({theme}) => theme.infoTextColor};
    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 20.8px;
   }
`;

export const Year = styled.div`
   font-weight: 400;
   font-size: 22px;
   line-height: 26.4px;
   color: ${({theme}) => theme.infoTextColor};
   @media (max-width: 767px) {
      font-size: 13px;
      line-height: 16.9px;
   }
`;

export const ProductionDateAndCompanies = styled.div`
   display: flex;
   flex-direction: column;
   gap: 12px;
   color: ${({theme}) => theme.infoTextColor};
`;

export const Production = styled.div`
   font-weight: 400;
   font-size: 18px;
   line-height: 21.6px;
   span {
    color: ${({theme}) => theme.greyText};
   }
   @media (max-width: 767px) {
      font-size: 12px;
      line-height: 15.6px;
      span {
         display: none;
      }
   }
`;

export const Companies = styled(Production)`
   @media (max-width: 767px) {
      display: none;
   }
`;

export const ReleaseDate = styled(Production)`

`;

export const Genres = styled.div`
   display: flex;
   flex-direction: row;
   gap: 16px;
   @media (max-width: 767px) {
      gap: 8px;
      flex-wrap: wrap;
   }
`;

export const Genre = styled.div`
   background: ${({theme}) => theme.genresContainer};
   border-radius: 5px;
   padding: 8px 16px 8px 16px;
   color: ${({theme}) => theme.genresTextColor};
   @media (max-width: 767px) {
      padding: 4px 8px 4px 8px;
      font-size: 10px;
      line-height: 11px;
   }
`;

export const Rating = styled.div`
   display: flex;
   flex-direction: row;
   gap: 12px;
   @media (max-width: 767px) {
      gap: 4px;
      flex-wrap: wrap;
   }
`;

export const IconAndAverage = styled.div`
   display: flex;
   flex-direction: row;
   gap: 10px;
   align-items: center;
`;

export const Icon = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
   @media (max-width: 767px) {
      width: 16px;
      height: 16px;
   }
`;

export const Average = styled.div`
   font-weight: 500;
   font-size: 22px;
   line-height: 28.9px;
   color: ${({theme}) => theme.infoTextColor};
   height: 100%;
   display: flex;
   align-items: center;

   span {
      font-weight: 600;
   }
   @media (max-width: 767px) {
      font-size: 13px;
      line-height: 16.9px;
      span {
         font-size: 13px;
         line-height: 16.9px;
      }
   }
`;

export const Votes = styled.div`
   font-weight: 500;
   font-size: 22px;
   line-height: 28.9px;
   color: ${({theme}) => theme.infoTextColor};
   height: 100%;
   display: flex;
   align-items: center;
   @media (max-width: 767px) {
      font-size: 13px;
      line-height: 16.9px;
   }
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

export const Cast = styled.div`
   width: 1368px;
   max-width: calc(100% - 2*12px);
   margin: auto;
   @media (max-width: 767px) {
    width: calc(100vw - 32px);
   }
`;

export const CastTitle = styled.div`
   font-weight: 600;
   font-size: 36px;
   line-height: 43.2px;
   color: ${({theme}) => theme.infoTextColor};
   margin-bottom: 20px;
   @media (max-width: 767px) {
    font-size: 20px;
    line-height: 24px;
   }
`;

export const People = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
   grid-gap: 24px;
   justify-items: center;
   @media (max-width: 767px) {
      grid-template-columns: repeat(auto-fill, 136px);
      grid-gap: 12px;
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
   color: black;
   transition: 0.3s all;
    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
   };
   @media (max-width: 767px) {
      width: 136px;
      height: 245px;
      border-radius: 5px;
      transition: none;
   }
   
`;

export const Image = styled.div`
    img {
    width: 177px;
    height: 234px;
    border-radius: 5px;
    background: ${({theme}) => theme.backgroundImage};
    margin-top: 14px;
    margin-left: 14px; 
    };

    @media (max-width: 767px) {
      img {
         width: 120px;
         height: 178px;
         margin-top: 7px;
         margin-left: 7px;
      }
   }
`;

export const RealName = styled.div`
   font-weight: 500;
   font-size: 22px;
   line-height: 28.6px;
   text-align: center;
   margin-top: 12px;
   color: ${({theme}) => theme.infoTextColor};
   @media (max-width: 767px) {
      font-size: 14px;
      line-height: 18.2px;
      margin-top: 4px;
   }
`;

export const MovieName = styled.div`
   font-weight: 400;
   font-size: 18px;
   line-height: 27px;
   color: ${({theme}) => theme.greyText};
   text-align: center;
   @media (max-width: 767px) {
      font-size: 13px;
      line-height: 16.9px;
      margin-bottom: 7px;
   }
`;

export const Crew = styled(Cast)`
`;

export const Job = styled(MovieName)`
`;