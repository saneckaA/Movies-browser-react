import React from "react";
import SearchBar from "../SearchBar";
import ExtrasHeader from "../ExtrasHeader";
import {
    Container,
    Title,
    HeaderContainer,
    NavigationList,
    NavigationItem,
    StyledLink,
    TitleImg,
    TitleContainer,
} from "./styled";
import { useSelector } from "react-redux";
import { selectLanguage } from "../LanguageSelect/languageSlice";
import { moviesNavigation, peopleNavigation } from "../language";

const Header = ({ setTheme }) => {

    const language = useSelector(selectLanguage);

    return (
        <Container>
            <HeaderContainer>
                <TitleContainer>
                    <TitleImg><img src="images/Video.svg" /></TitleImg>
                    <Title>
                        Movies Browser
                    </Title>
                </TitleContainer>
                <NavigationList>
                    <NavigationItem>
                        <StyledLink activeClassName="active" to="/movies">
                        {moviesNavigation[language]}
                        </StyledLink>
                    </NavigationItem>
                    <NavigationItem>
                        <StyledLink activeClassName="active" to="/people">
                        {peopleNavigation[language]}
                        </StyledLink>
                    </NavigationItem>
                </NavigationList>
                <SearchBar />
                <ExtrasHeader setTheme={setTheme} />
            </HeaderContainer>
        </Container>
    )
}

export default Header;