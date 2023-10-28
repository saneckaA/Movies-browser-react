import styled from "styled-components";

export const Container = styled.div`
   @media (max-width: 1200px) {
      margin-top: 10px;
   }
`;

export const Search = styled.input`
   color: grey;
   background: white;
   border: 1px solid rgba(228, 230, 240, 1);
   border-radius: 33px;;
   width: 262px;
   height: 25px;
   padding: 10px;
   text-align: center;
   align-self: center;
   margin-right: 15px;
   @media (max-width: 767px) {
    margin-right: auto;
    margin-left: auto;
   }
`;