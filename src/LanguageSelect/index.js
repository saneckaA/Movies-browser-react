import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage, setLanguage } from './languageSlice';
import { Container, Select } from './styled';
import { languages } from '../language';


const LanguageSelect = () => {

    const dispatch = useDispatch();
    const language = useSelector(selectLanguage);

    const handleChange = ({ target }) => {
        dispatch(setLanguage(target.value))
        console.log("Język:", target.value)
    };

    return (
        <Container>
            <Select
                value={language}
                onChange={handleChange}
            >
                {languages.map((language) => (
                    <option value={language.code} key={language.code}>
                        {language.label}
                    </option>
                )) }
            </Select>
        </Container>
    )
}

export default LanguageSelect;