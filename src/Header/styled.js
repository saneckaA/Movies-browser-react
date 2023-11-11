import styled from "styled-components";
import { NavLink } from "react-router-dom";
const activeClassName = "link-active";

export const Container = styled.div`
   min-height: 94px;
   height: auto;
   width: auto;
   background: rgba(24, 24, 27, 1);
   display: flex;
   justify-content: center;
   @media (max-width: 1200px) {
    width: auto;
    height: auto;
   };
`;

export const HeaderContainer = styled.div`
   width: 1368px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   @media (max-width: 1200px) {
    width: auto;
    justify-content: center;
   }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TitleImg = styled.div`
  align-self: center;
  margin-right: 8px;
`;

export const Title = styled.div`
   align-self: center;
   color: white;
   font-size: 24px;
   font-weight: 500;
   line-height: 40px;
  text-align: center;
  margin-right: 15px;
`;

export const SearchBar = styled.div`
   color: grey;
   background: white;
   border: 1px solid rgba(228, 230, 240, 1);
   border-radius: 33px;;
   width: 432px;
   height: 25px;
   padding: 10px;
   text-align: center;
   align-self: center;
   margin-right: 15px;
`;

export const NavigationList = styled.ul`
   display: flex;
   flex-direction: row;
   margin-right: 150px;
   font-size: 16px;
   font-weight: 600;
   list-style: none;
   @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8px;
   }
`;

export const NavigationItem = styled.li`
  flex-grow: 0;
`;

export const StyledLink = styled(NavLink).attrs(() => ({ activeClassName: "active"}))`
   &.active {
   border: 1px solid white;
   border-radius: 29px;
}
   color: white;
   width: 80px;
   height: 20px;
   padding: 15px;
   text-transform: uppercase;
   text-align: center;
   align-self: center;
   text-decoration: none;
   margin-right: 35px;
   @media (max-width: 767px) {
    margin-right: 0;
   }
`;

