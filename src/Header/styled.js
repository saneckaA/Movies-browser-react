import styled from "styled-components";
import { NavLink } from "react-router-dom";
const activeClassName = "link-active";

export const Container = styled.div`
   min-height: 94px;
   width: 100%;
   background: rgba(24, 24, 27, 1);
   display: flex;
   justify-content: center;
`;

export const HeaderContainer = styled.div`
   width: 1368px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
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

export const NavigationContainer = styled.nav`
   display: flex;
   flex-direction: row;
   margin-right: 150px;
   font-size: 16px;
   font-weight: 600;
   flex-wrap: wrap;
`;

export const NavItem = styled(NavLink)`
   color: white;
   width: 80px;
   height: 20px;
   padding: 15px;
   text-transform: uppercase;
   text-align: center;
   align-self: center;
   text-decoration: none;
   margin-right: 35px;

   &.active {
   border: 1px solid white;
   border-radius: 29px;
   }
`;

export const Movies = styled(NavItem).attrs(() => ({
   activeClassName: 'active',
}))`
   
`;

export const People = styled(Movies)`

`;

export const ThemeButton = styled.button`
   color: white;
   width: 80px;
   height: 40px;
   background: black;
   border: 1px solid white;
   border-radius: 25px;
   margin-left: 10px;
   margin-right: 10px;
   padding: 10px;
   display: none;
`;

export const Language = styled.div`
   color: black;
   width: 100px;
   height: 20px;
   background: white;
   border-radius: 25px;
   padding: 10px;
   text-align: center;
   display: none;
`;