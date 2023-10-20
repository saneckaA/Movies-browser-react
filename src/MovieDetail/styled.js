import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   min-height: 1800px;
`;

export const BcgContainer = styled.div`
  height: 770px;
  width: 100%;
  background: black;
`;

export const MainPoster = styled.div`

   height: 770px;
   width: 100%;
   color: white;
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
    url(${({ url }) => url});
  background-size: 1920px 770px, 1920px 770px, 1920px 770px, 1920px 770px, 1368px 769px;
  background-repeat: no-repeat;
  background-position: center;

`;

export const TitleAndRating = styled.div`
   width: 1368px;
   height: 710px;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   margin-right: auto;
   margin-left: auto;
   margin: 0 auto;
   padding-bottom: 56px;
`;

export const IconBcg = styled.div`

`;

export const AverageBcg = styled.div`
   color: white;
   font-weight: 500;
   font-size: 16px;
   line-height: 19.2px;

   span {
   font-weight: 600;
   font-size: 30px;
   line-height: 39px;
   }

`;

export const VotesBcg = styled.div`
   color: white;
   font-weight: 500;
   font-size: 16px;
   line-height: 19.2px;
`;

export const MovieTitle = styled.h1`
   color: white;
   font-weight: 600;
   font-size: 64px;
   line-height: 76.8px;

   z-index: 1;
`;

export const InfoBar = styled.div`
   height: 1863px;
   width: 1368px;
   margin-left: auto;
   margin-right: auto;
   margin-top: 50px;
   display: flex;
   flex-direction: column;
   gap: 40px;

`;

export const Details = styled.div`
   background: white;
   height: auto;
   width: 100%;
   box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
   display: flex;
   flex-direction: row;
   gap: 40px;
`;

export const Poster = styled.div`
   margin-top: 40px;
   margin-left: 40px;
   margin-bottom: 40px;
   background: grey;
   height: 464px;
   
  img {
   height: 464px;
   width: 312px;
   background: grey;
   border-radius: 5px;
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
`;

export const Title = styled.div`
    font-weight: 600;
    font-size: 36px;
    line-height: 43.2px;
`;

export const Year = styled.div`
   font-weight: 400;
   font-size: 22px;
   line-height: 26.4px;
`;

export const ProductionDateAndCompanies = styled.div`
   display: flex;
   flex-direction: column;
   gap: 12px;
`;
export const Production = styled.div`
   font-weight: 400;
   font-size: 18px;
   line-height: 21.6px;
   span {
    color: rgba(116, 120, 139, 1);
   }
`;

export const Companies = styled(Production)`

`;

export const ReleaseDate = styled(Production)`

`;

export const Genres = styled.div`
   display: flex;
   flex-direction: row;
   gap: 16px;
`;

export const Genre = styled.div`
   background: rgba(228, 230, 240, 1);
   border-radius: 5px;
   padding: 8px 16px 8px 16px;
   color: rgba(24, 24, 27, 1);
`;

export const Rating = styled.div`
   display: flex;
   flex-direction: row;
   gap: 12px;

   ${({ background }) => background && css`
     display: flex;
     flex-direction: column;
     gap: 12px;
   
   `}
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
`;

export const Average = styled.div`
   font-weight: 500;
   font-size: 14px;
   line-height: 16.8px;
   color: rgba(0, 0, 0, 1);
    height: 100%;
    display: flex;
    align-items: center;

   span {
      font-weight: 600;
      font-size: 22px;
      line-height: 28.6px;
   }
`;

export const Votes = styled.div`
   font-weight: 500;
   font-size: 14px;
   line-height: 16.8px;
   color: rgba(0, 0, 0, 1);
   height: 100%;
   display: flex;
   align-items: center;
`;

export const Overview = styled.div`
   font-weight: 400;
   font-size: 20px;
   line-height: 32px;
`;

export const Cast = styled.div`
   height: auto;
   width: 100%;
`;

export const CastTitle = styled.div`
   font-weight: 600;
   font-size: 36px;
   line-height: 43.2px;
   color: rgba(0, 0, 0, 1);
   margin-bottom: 20px;
`;

export const People = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
   grid-gap: 24px;
`;

export const Person = styled(Link)`
   width: 208px;
   height: 359px;
   background: white;
   display: flex;
   flex-direction: column;
   box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
   text-decoration: none;
   color: black;
   transition: 0.3s all;
    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
   }
`;

export const Image = styled.div`
 
    img {
    width: 177px;
    height: 234px;
    border-radius: 5px;
    background: grey;
    margin-top: 14px;
    margin-left: 14px; 
    }
`;

export const RealName = styled.div`
   font-weight: 500;
   font-size: 22px;
   line-height: 28.6px;
   text-align: center;
   margin-top: 12px;
`;

export const MovieName = styled.div`
   font-weight: 400;
   font-size: 18px;
   line-height: 27px;
   color: rgba(126, 131, 154, 1);
   text-align: center;
`;

export const Crew = styled.div`
    height: auto;
    width: 100%;


`;

export const Job = styled(MovieName)`

`;