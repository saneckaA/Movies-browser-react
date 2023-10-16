import React from "react";

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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
                    <Movies >
                        Movies
                    </Movies>
                    <People >
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