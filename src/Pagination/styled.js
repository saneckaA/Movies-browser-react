import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const PagiButton = styled.button`
   background: rgba(214, 228, 255, 1);
   display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin: 0 6px;
  outline: none;
  border: 0;
  border-radius: 5px;
  color: black;
  transition: 0.3s filter;

  &:hover {
    filter: brightness(103%);
    cursor: pointer;
  }

  &:disabled {
    background: rgb(228, 230, 240);
    color: rgb(0, 0, 0);
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    margin: 0 4px;
    padding: 8px 12px;
   }
`;

export const Text = styled.div`
   font-weight: 400;
   font-size: 14px;
   line-height: 19.6px;
   text-align: center;
   @media (max-width: 767px) {
    display: none;
   }
`;

export const First = styled.img`
  width: 7px;
  margin-right: 8px;
  @media (max-width: 767px) {
   margin: 0 4px;
   width: 5px;
   }
`;

export const MobileFirst = styled.img`
  display: none;
  @media (max-width: 767px) {
   display: inline;
   width: 5px;
   }
`;

export const Previous = styled.img`
  width: 7px;
  margin-right: 8px;
  @media (max-width: 767px) {
   margin: 0 4px;
   width: 5px;
   }
`;

export const Next = styled.img`
  width: 7px;
  margin-left: 8px;
  @media (max-width: 767px) {
   margin: 0 4px;
   width: 5px;
   }
`;

export const Last = styled.img`
  width: 7px;
  margin-left: 8px;
  @media (max-width: 767px) {
   margin: 0 4px;
   width: 5px;
   }
`;

export const MobileLast = styled.img`
   display: none;
   @media (max-width: 767px) {
   display: inline;
   width: 5px;
   }
`;

export const Pages = styled.div`
   height: 24px;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: rgba(126, 131, 154, 1);

   span {
    color: ${({theme}) => theme.pagesPaginationColor};
    font-weight: 600;
   }
   @media (max-width: 767px) {
    margin: 0 4px;
    font-size: 10px;
   }
`;






