import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 50px;
  margin-left: 60px;
  margin-top: 20px;
  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
   }
`;

export const Select = styled.select`
   width: 100px;
   height: 50px;
   border-radius: 25px;
`;