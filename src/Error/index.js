import React from 'react';
import { Container, Image, Title, SubTitle, Button } from './styled';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../LanguageSelect/languageSlice';
import { errorText, errorTitle, returnButton } from '../language';

const Error = () => {

    const language = useSelector(selectLanguage);

    return (
        <Container>
            <Image>
                <img src="images/error.png" />
            </Image>
            <Title>
                {errorTitle[language]}
            </Title>
            <SubTitle>
                {errorText[language]}
            </SubTitle>
            <Button to="/movies">
                <button>{returnButton[language]}</button>
            </Button>
        </Container>
    )
}

export default Error;