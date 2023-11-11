import React from 'react'
import LanguageSelect from '../LanguageSelect';
import ToggleThemeButton from '../ToggleThemeButton';
import { Container } from './styled';

const ExtrasHeader = () => {
    return (
        <Container>
            <LanguageSelect />
            <ToggleThemeButton />
        </Container>
    )
}

export default ExtrasHeader;