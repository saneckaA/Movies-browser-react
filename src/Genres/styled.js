import styled from "styled-components";

export const Types = styled.div`
   display: flex;
   flex-direction: row;
   gap: 10px;
   padding-top: 10px;
   flex-wrap: wrap;
`;

export const Type = styled.div`
   background: ${({theme}) => theme.genresContainer};
   border-radius: 5px;
   font-size: 14px;
   font-weight: 400;
   line-height: 19.6px;
   padding: 8px 16px 8px 16px;
   color: ${({theme}) => theme.genresTextColor};
`;