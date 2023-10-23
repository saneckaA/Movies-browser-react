import React from 'react';
import { Container, Text, Image } from './styled';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../LanguageSelect/languageSlice';
import { noResults } from '../language';

const NoResults = () => {

    const language = useSelector(selectLanguage);

    return (
        <Container>
            <Text>
                {noResults[language]} ""
            </Text>
            <Image>
                <img src="images/no_results.png" />
            </Image>
        </Container>
    )
};

export default NoResults;