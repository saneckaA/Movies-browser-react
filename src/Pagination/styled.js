import styled from "styled-components";

export const Container = styled.div`
   width: 525px;
   height: 36px;
   display: flex;
   flex-direction: row;
   gap: 24px;
   align-items: center;
   margin-right: auto;
   margin-left: auto;
   margin-top: 30px;
`;

export const Prev = styled.div`
   display: flex;
   flex-direction: row;
   gap: 8px;
`;

export const Nex = styled.div`
   display: flex;
   flex-direction: row;
   gap: 8px;
`;

export const First = styled.button`
   border-radius: 5px;
   padding: 8px 16px 8px 16px;
   background: rgba(214, 228, 255, 1);
   text-align: center;
   font-weight: 400;
   font-size: 14px;
   line-height: 19.6px;
   display: flex;
   flex-direction: row;
   gap: 8px;
   align-items: center;
   border: none;

   img {
    width: 7px;
    height: 11px;
   }

   &:disabled {
    background: rgb(228, 230, 240);
    color: rgb(0, 0, 0);
    cursor: not-allowed;
   }
`;

export const Previous = styled.button`
   border-radius: 5px;
   padding: 8px 16px 8px 16px;
   text-align: center;
   background: rgba(214, 228, 255, 1);
   font-weight: 400;
   font-size: 14px;
   line-height: 19.6px;
   display: flex;
   flex-direction: row;
   gap: 8px;
   align-items: center;
   border: none;

   img {
    width: 7px;
    height: 11px;
   }

   &:disabled {
    background: rgb(228, 230, 240);
    color: rgb(0, 0, 0);
    cursor: not-allowed;
   }
`;


export const Pages = styled.div`

   height: 24px;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: rgba(126, 131, 154, 1);

   span {
    color: rgba(24, 24, 27, 1);
    font-weight: 600;
   }
`;

export const Next = styled.button`
   border-radius: 5px;
   padding: 8px 16px 8px 16px;
   text-align: center;
   background: rgba(214, 228, 255, 1);
   font-weight: 400;
   font-size: 14px;
   line-height: 19.6px;
   display: flex;
   flex-direction: row;
   gap: 8px;
   align-items: center;
   border: none;

   img {
    width: 7px;
    height: 11px;
   }

   &:disabled {
    background: rgb(228, 230, 240);
    color: rgb(0, 0, 0);
    cursor: not-allowed;
   }
`;

export const Last = styled.button`
   border-radius: 5px;
   padding: 8px 16px 8px 16px;;
   text-align: center;
   background: rgba(214, 228, 255, 1);
   font-weight: 400;
   font-size: 14px;
   line-height: 19.6px;
   display: flex;
   flex-direction: row;
   gap: 8px;
   align-items: center;
   border: none;

   img {
    width: 7px;
    height: 11px;
   }

   &:disabled {
    background: rgb(228, 230, 240);
    color: rgb(0, 0, 0);
    cursor: not-allowed;
   }
`;