import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   width: 1368px;
   height: 650px;
   margin-left: auto;
   margin-right: auto;
`;

export const ContainerTitle = styled.div`
   font-weight: 600;
   font-size: 36px;
   line-height: 43.2px;
   padding-top: 56px;
`;

export const MoviesBar = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
   grid-gap: 24px;
   justify-content: center;
   padding-top: 17px;
`;

export const MediaContainer = styled.div`

`;

export const Movie = styled(Link)`
   width: 324px;
   height: 700px;
   border-radius: 5px;
   background: #fff;
   box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
   text-decoration: none;
   color: black;
   transition: 0.3s all;
    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
   }

   img {
    width: 292px;
    height: 434px;
    margin-top: 16px;
    margin-left: 16px;
    margin-bottom: 16px;
    border-radius: 5px;
    background: grey;
   }
`;

export const Poster = styled.div`

`;

export const Descirption = styled.div`
   width: 292px;
   min-height: 105px;
   margin-left: 16px;
   display: flex;
   position: relative;
   flex-direction: column;
`;

export const MovieTitle = styled.h2`
   font-size: 22px;
   font-weight: 600;
   line-height: 29px;
   margin-top: -5px;
   color: rgba(24, 24, 27, 1);
`;

export const MovieYear = styled.div`
   font-size: 16px;
   font-weight: 400;
   line-height: 24px;
   margin-top: -10px;
   color: rgba(126, 131, 154, 1);
`;

export const Types = styled.div`
   display: flex;
   flex-direction: row;
   gap: 10px;
   padding-top: 10px;
   flex-wrap: wrap;

   @media (max-width: 767px) {
    gap: 8px;
    padding-top: 6px;
   }
`;

export const Type = styled.div`
   background: rgba(228, 230, 240, 1);
   border-radius: 5px;
   font-size: 14px;
   font-weight: 400;
   line-height: 19.6px;
   padding: 8px 16px 8px 16px;

   @media (max-width: 767px) {
    font-size: 10px;
    line-height: 11px;
    padding: 4px 8px 4px 8px;
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
`;

export const Icon = styled.div`
   margin-top: -2px;
   `;

export const Value = styled.div`
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
`;

export const Votes = styled.div`
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: rgba(126, 131, 154, 1);
`;