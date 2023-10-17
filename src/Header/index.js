import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { 
    Container, 
    Title, 
    Movies, 
    People, 
    SearchBar, 
    ThemeButton, 
    Language, 
    HeaderContainer, 
    NavigationContainer, 
    TitleImg, 
    TitleContainer 
} from "./styled";

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
                <SearchBar>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />  Search for movies...
                </SearchBar>
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