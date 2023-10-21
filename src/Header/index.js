import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import {
    Container,
    Title,
    Movies,
    People,
    ThemeButton,
    Language,
    HeaderContainer,
    NavigationContainer,
    TitleImg,
    TitleContainer
} from "./styled";

import { useLocation } from "react-router-dom";
import SearchResults from "../SearchResults";

const Header = () => {

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
                        Movies
                    </Movies>
                    <People activeClassName="active" to="/people">
                        People
                    </People>
                </NavigationContainer>
                <SearchResults />
            </HeaderContainer>
            <ThemeButton>
                Button
            </ThemeButton>
            <Language>
                Language
            </Language>
        </Container>
    )
}

export default Header;