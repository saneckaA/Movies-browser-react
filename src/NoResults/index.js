import React from 'react';
import { Container, Text, ImageContainer, Image } from './styled';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../LanguageSelect/languageSlice';
import { noResults } from '../language';
import noResultsImg from '../images/no_results.svg'


const NoResults = ({ searchQuery }) => {

    const language = useSelector(selectLanguage);

    return (
        <Container>
            <Text>
                {noResults[language]} "{searchQuery}"
            </Text>
            <ImageContainer>
                <Image src={noResultsImg} />
            </ImageContainer>


        </Container>
    )
};

export default NoResults;