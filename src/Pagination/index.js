import React from 'react';
import { PaginationContainer, PagiButton, Text, First, MobileFirst, Previous, Next, Last, MobileLast, Pages } from './styled';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../LanguageSelect/languageSlice';
import { first, last, next, ofPage, page, prev } from '../language';
import disbalePrevImg from '../images/disablePrev.svg';
import PrevImg from '../images/prev.svg';
import disableNextImg from '../images/disableNext.svg';
import NextImg from '../images/next.svg';

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
                <First src={disablePrev ? disbalePrevImg : PrevImg} />
                <Text>{first[language]}</Text>
                <MobileFirst src={disablePrev ? disbalePrevImg : PrevImg} />
            </PagiButton>
            <PagiButton onClick={onPrevButtonClick} disabled={disablePrev}>
                <Previous src={disablePrev ? disbalePrevImg : PrevImg} />
                <Text>{prev[language]}</Text>
            </PagiButton>
            <Pages>
                {page[language]} <span>{currentPage}</span> {ofPage[language]} <span>{totalPages}</span>
            </Pages>
            <PagiButton onClick={onNextButtonClick} disabled={disableNext}>
                <Text>{next[language]}</Text>
                <Next src={disableNext ? disableNextImg : NextImg} />
            </PagiButton>
            <PagiButton onClick={onLastButtonClick} disabled={disableNext}>
                <Text>{last[language]}</Text>
                <Last src={disableNext ? disableNextImg : NextImg} />
                <MobileLast src={disableNext ? disableNextImg : NextImg} />
            </PagiButton>
        </PaginationContainer>
    )
}

export default Pagination;