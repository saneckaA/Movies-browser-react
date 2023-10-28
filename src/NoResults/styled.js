import styled from "styled-components";

export const Container = styled.div`
margin-left: auto;
margin-right: auto;
width: 1368px;
height: 650px;
@media (max-width: 767px) {
   width: auto;
   height: auto;
   margin-left: 16px;
   margin-right: 16px;
   }
`;

export const Text = styled.div`
   font-size: 36px;
   font-weight: 600;
   line-height: 43.2px;
   padding-top: 30px;
   color: ${({theme}) => theme.infoTextColor};
   @media (max-width: 767px) {
    font-size: 20px;
    line-height: 24.8px;
   }
`;

export const ImageContainer = styled.div`
   display: flex;
   justify-content: center;
`;

export const Image = styled.img`
   @media (max-width: 767px) {
      width: 300px;
   }
`;