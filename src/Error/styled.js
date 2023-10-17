import styled from "styled-components";

export const Container = styled.div`
   width: 1368px;
   height: 650px;
   margin-right: auto;
   margin-left: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const Image = styled.div`

`;

export const Title = styled.div`
   font-weight: 600;
   font-size: 36px;
   line-height: 43.2px;
   margin-bottom: 20px;
`;

export const SubTitle = styled.div`
   font-weight: 500;
   font-size: 22px;
   line-height: 28.6px;
   margin-bottom: 20px;
   text-align: center;
`;

export const Button = styled.div`
 button {
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    color: white;
    width: 181px;
    height: 51px;
    border-radius: 5px;
    padding: 16px 24px 16px 24px;
    background: rgba(0, 68, 204, 1);
    border: none;

    &:hover {
        background: rgba(0, 68, 294, 0.8);
    }
 }
`;