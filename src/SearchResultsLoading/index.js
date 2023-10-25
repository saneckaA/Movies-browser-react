import React from 'react';
import Loading from '../Loading';
import { Container, Text } from './styled';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../LanguageSelect/languageSlice';
import { searchFor } from '../language';

const SearchResultsLoading = ({searchQuery}) => {

    const language = useSelector(selectLanguage);

    return (
        <Container>
            <Text>
                {searchFor[language]} "{searchQuery}"
            </Text>
            <Loading />
        </Container>
    )
}

export default SearchResultsLoading;