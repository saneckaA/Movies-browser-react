import React from "react";
import SearchResults from "../SearchResults";
import ExtrasHeader from "../ExtrasHeader";
import {
    Container,
    Title,
    Movies,
    People,
    HeaderContainer,
    NavigationContainer,
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
                    <TitleImg><img src="images/video.png" /></TitleImg>
                    <Title>
                        Movies Browser
                    </Title>
                </TitleContainer>
                <NavigationContainer>
                    <Movies activeClassName="active" to="/movies">
                        {moviesNavigation[language]}
                    </Movies>
                    <People activeClassName="active" to="/people">
                        {peopleNavigation[language]}
                    </People>
                </NavigationContainer>
                <SearchResults />
                <ExtrasHeader setTheme={setTheme} />
            </HeaderContainer>
        </Container>
    )
}

export default Header;