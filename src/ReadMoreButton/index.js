import React, { useState } from 'react';
import { Button } from './styled';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../LanguageSelect/languageSlice';
import { readLess, readMore } from '../language';

const ReadMoreButton = ({ content }) => {

    const [show, setShow] = useState(false);
    const language = useSelector(selectLanguage);
    
    return content.length > 400 ? (
        <>
            {show ? content : `${content.slice(0, 400)}...`}
            <Button onClick={() => setShow((show) => !show)}> {show ? readLess[language] : readMore[language]}</Button>
        </>
    ) : (<>{content} </>)
}

export default ReadMoreButton;