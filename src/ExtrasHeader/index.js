import React from 'react'
import LanguageSelect from '../LanguageSelect';
import ToggleThemeButton from '../ToggleThemeButton';
import { Container } from './styled';

const ExtrasHeader = ({setTheme}) => {
    return (
        <Container>
            <LanguageSelect />
            <ToggleThemeButton setTheme={setTheme} />
        </Container>
    )
}

export default ExtrasHeader;