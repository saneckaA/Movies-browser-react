import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
   width: 1368px;
   height: 1495px;
   margin-right: auto;
   margin-left: auto;
`;

export const Title = styled.div`
   font-weight: 600;
   font-size: 36px;
   line-height: 43.2px;
   color: ${({theme}) => theme.infoTextColor};
   padding-top: 40px;
`;

export const FamousPeople = styled.div`
   width: 100%;
   height: auto;
   margin-top: 20px;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
   grid-gap: 24px;
`;

export const Person = styled(Link)`
   width: 208px;
   height: 359px;
   background: ${({theme}) => theme.infoContainerColor};
   display: flex;
   flex-direction: column;
   box-shadow: ${({theme}) => theme.boxShadowColor};
   text-decoration: none;
   border: 1px solid rgb(168, 165, 165);
   transition: 0.3s all;
    &:hover {
      opacity: 0.8;
      transform: scale(1.05);
    }
`;

export const Image = styled.div`
   width: 177px;
   height: 264px;
   background: ${({theme}) => theme.backgroundImage};
   margin-top: 14px;
   margin-left: 14px;
   box-shadow: ${({theme}) => theme.boxShadowColor};

   img {
      width: 177px;
      height: 264px;
      margin-bottom: 14px;
      border-radius: 5px;
    }
`;

export const Name = styled.div`
   font-weight: 500;
   font-size: 22px;
   line-height: 28.6px;
   text-align: center;
   color: ${({theme}) => theme.infoTextColor};
   margin-top: 12px;
`;