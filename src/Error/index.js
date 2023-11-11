import React from 'react';
import { Container, Image, Title, SubTitle, Button } from './styled';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../LanguageSelect/languageSlice';
import { errorText, errorTitle, returnButton } from '../language';
import ErrorImg from '../images/error.png'

const Error = () => {

    const language = useSelector(selectLanguage);

    return (
        <Container>
            <Image src={ErrorImg} />
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
};

export default Error;