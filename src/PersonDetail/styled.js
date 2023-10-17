import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   width: 1368px;
   height: auto; 
   margin-left: auto;
   margin-right: auto;
   display: flex;
   flex-direction: column;
   gap: 40px;
`;

export const Details = styled.div`
   width: 100%;
   height: auto;
   margin-top: 50px;
   display: flex;
   flex-direction: row;
   gap: 24px;
   background: white;
`;

export const Image = styled.div`
   width: 399px;
   height: 564px;
   margin-top: 40px;
   margin-left: 40px;
   margin-bottom: 40px;
   background: grey;

   img {
    width: 399px;
   height: 564px;
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
`;

export const Name = styled.div`
   font-weight: 600;
   font-size: 36px;
   line-height: 43.2px;
`;

export const Birth = styled.div`
   display: flex;
   flex-direction: column;
   gap: 12px;
`;

export const Date = styled.div`
   font-weight: 400;
   font-size: 18px;
   line-height: 21.6px;
   color: rgba(0, 0, 0, 1);
   span {
    color: rgba(116, 120, 139, 1);
   }
`;

export const Place = styled(Date)`
`;

export const Overview = styled.div`
   font-weight: 400;
   font-size: 20px;
   line-height: 32px;
   color: rgba(0, 0, 0, 1);
`;

export const MoviesCast = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   gap: 24px;
`;

export const HeaderName = styled.div`
   font-weight: 600;
   font-size: 36px;
   line-height: 43.2px;
`;

export const Movies = styled.div`
   height: auto;
   width: 100%;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
   grid-gap: 24px;
`;

export const Movie = styled(Link)`
   background: white;
   position: relative;
   width: 324px;
   height: 690px;
   border-radius: 5px;
   box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
   text-decoration: none;
   color: black;
   transition: 0.3s all;
    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
    }
`;

export const Poster = styled.div`
   width: 292px;
   height: 434px;
   margin-top: 16px;
   margin-left: 16px;
   margin-bottom: 16px;
   border-radius: 5px;
   background: grey;

  img {
    width: 292px;
    height: 434px;
}
`;

export const Description = styled.div`
   width: 292px;
   min-height: 105px;
   margin-left: 16px;
   display: flex;
   position: relative;
   flex-direction: column;
`;

export const MovieTitle = styled.div`
   font-size: 22px;
   font-weight: 500;
   line-height: 29px;
   margin-top: -5px;
`;

export const CharacterAndYear = styled.div`
   font-size: 16px;
   font-weight: 400;
   line-height: 24px;
   color: rgba(126, 131, 154, 1);
   margin-top: 8px;
`;

export const Types = styled.div`
   display: flex;
   flex-direction: row;
   gap: 10px;
   padding-top: 10px;
   flex-wrap: wrap;
`;

export const Type = styled.div`
   background: rgba(228, 230, 240, 1);
   border-radius: 5px;
   font-size: 14px;
   font-weight: 400;
   line-height: 19.6px;
   padding: 8px 16px 8px 16px;
`;

export const Rating = styled.div`
   min-width: 140px;
   height: 24px;
   display: flex;
   flex-direction: row;
   gap: 12px;
   margin-top: 24px;
   padding-bottom: 16px;
   margin-left: 16px;
   margin-right: 16px;
   position: absolute;
   bottom: 5px;

   img {
      width: 16px;
      height: 16px;
   }
`;

export const Icon = styled.div`
   margin-top: -2px;
`;

export const Average = styled.div`
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

export const MoviesCrew = styled(MoviesCast)`

`;


