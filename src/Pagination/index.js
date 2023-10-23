import React from 'react';
import { Container, First, Previous, Pages, Next, Last, Prev, Nex } from './styled';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../LanguageSelect/languageSlice';
import { first, last, next, ofPage, page, prev } from '../language';

const Pagination = ({ currentPage, pageQueryParamName, totalPages, searchQueryParamName, searchQuery }) => {

    const navigate = useNavigate();
    const disableNext = currentPage === totalPages;
    const disablePrev = currentPage === 1;
    const language = useSelector(selectLanguage);

    const onFirstButtonClick = () => {
        navigate(`?${pageQueryParamName}=1&${searchQueryParamName}=${searchQuery}`)
    };

    const onPrevButtonClick = () => {
        navigate(`?${pageQueryParamName}=${currentPage - 1}&${searchQueryParamName}=${searchQuery}`)
    };

    const onNextButtonClick = () => {
        navigate(`?${pageQueryParamName}=${currentPage + 1}&${searchQueryParamName}=${searchQuery}`)
    };

    const onLastButtonClick = () => {
        navigate(`?${pageQueryParamName}=${totalPages}&${searchQueryParamName}=${searchQuery}`)
    };

    return (
        <Container >
            <Prev>
                <First onClick={onFirstButtonClick} disabled={disablePrev}>
                    <img src="images/prev.svg" /> {first[language]}
                </First>
                <Previous onClick={onPrevButtonClick} disabled={disablePrev}>
                    <img src="images/prev.svg" /> {prev[language]}
                </Previous>
            </Prev>
            <Pages>
                {page[language]} <span>{currentPage}</span> {ofPage[language]} <span>{totalPages}</span>
            </Pages>
            <Nex>
                <Next onClick={onNextButtonClick} disabled={disableNext}>
                    {next[language]} <img src="images/next.svg" />
                </Next>
                <Last onClick={onLastButtonClick} disabled={disableNext}>
                    {last[language]} <img src="images/next.svg" />
                </Last>
            </Nex>
        </Container>
    )
}

export default Pagination;