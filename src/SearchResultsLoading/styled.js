import styled from "styled-components";

export const Container = styled.div`
margin-left: auto;
margin-right: auto;
width: 1368px;
height: 650px;
`;

export const Text = styled.div`
   font-size: 36px;
   font-weight: 600;
   line-height: 43.2px;
   padding-top: 30px;
   color: ${({theme}) => theme.infoTextColor}
`;

