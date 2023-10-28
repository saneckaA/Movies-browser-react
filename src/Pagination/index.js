import React from 'react';
import { PaginationContainer, PagiButton, Text, First, MobileFirst, Previous, Next, Last, MobileLast, Pages } from './styled';
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
        <PaginationContainer>
            <PagiButton onClick={onFirstButtonClick} disabled={disablePrev}>
                <First src={disablePrev ? "images/disablePrev.svg" : "images/Prev.svg"} />
                <Text>{first[language]}</Text>
                <MobileFirst src={disablePrev ? "images/disablePrev.svg" : "images/Prev.svg"} />
            </PagiButton>
            <PagiButton onClick={onPrevButtonClick} disabled={disablePrev}>
                <Previous src={disablePrev ? "images/disablePrev.svg" : "images/Prev.svg"} />
                <Text>{prev[language]}</Text>
            </PagiButton>
            <Pages>
                {page[language]} <span>{currentPage}</span> {ofPage[language]} <span>{totalPages}</span>
            </Pages>
            <PagiButton onClick={onNextButtonClick} disabled={disableNext}>
                <Text>{next[language]}</Text>
                <Next src={disableNext ? "images/disableNext.svg" : "images/Next.svg"} />
            </PagiButton>
            <PagiButton onClick={onLastButtonClick} disabled={disableNext}>
                <Text>{last[language]}</Text>
                <Last src={disableNext ? "images/disableNext.svg" : "images/Next.svg"} />
                <MobileLast src={disableNext ? "images/disableNext.svg" : "images/Next.svg"} />
            </PagiButton>
        </PaginationContainer>
    )
}

export default Pagination;