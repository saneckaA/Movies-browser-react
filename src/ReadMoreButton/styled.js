import styled from "styled-components";

export const Button = styled.button`
   background: rgb(176, 172, 160);
   border-radius: 8px;
   border: none;
   padding: 10px 15px 10px 15px;
   margin-left: 10px;
   font-size: 12px;

   &:hover {
    background: rgb(212, 210, 225);
   }

   @media (max-width: 767px) {
      padding: 5px 7px 5px 7px;
      font-size: 10px;
   }
   
`;