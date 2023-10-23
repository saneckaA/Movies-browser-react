import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import {
    Container,
    Title,
    Movies,
    People,
    ThemeButton,
    HeaderContainer,
    NavigationContainer,
    TitleImg,
    TitleContainer,
    Extras,
} from "./styled";
import SearchResults from "../SearchResults";
import LanguageSelect from "../LanguageSelect";
import { useSelector } from "react-redux";
import { selectLanguage } from "../LanguageSelect/languageSlice";
import { moviesNavigation, peopleNavigation } from "../language";


const Header = () => {

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
            </HeaderContainer>
            <ThemeButton>
                Button
            </ThemeButton>
            <Extras>
                <LanguageSelect />
            </Extras>

        </Container>
    )
}

export default Header;