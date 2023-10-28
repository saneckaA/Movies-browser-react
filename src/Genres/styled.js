import styled from "styled-components";

export const Types = styled.div`
   display: flex;
   flex-direction: row;
   gap: 10px;
   padding-top: 10px;
   flex-wrap: wrap;
   @media (max-width: 1200px) {
    gap: 8px;
    padding-top: 6px;
   }
`;

export const Type = styled.div`
   background: ${({theme}) => theme.genresContainer};
   border-radius: 5px;
   font-size: 14px;
   font-weight: 400;
   line-height: 19.6px;
   padding: 8px 16px 8px 16px;
   color: ${({theme}) => theme.genresTextColor};
   @media (max-width: 1200px) {
    font-size: 10px;
    line-height: 11px;
    padding: 4px 8px 4px 8px;
   }
`;