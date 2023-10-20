import React from 'react';
import { Container, First, Previous, Pages, Next, Last, Prev, Nex } from './styled';
import { useNavigate } from 'react-router-dom';

const Pagination = ({ currentPage, pageQueryParamName, totalPages }) => {

    const navigate = useNavigate();
    const disableNext = currentPage === totalPages;
    const disablePrev = currentPage === 1;

    const onFirstButtonClick = () => {
        navigate(`?${pageQueryParamName}=1 `)
    };

    const onPrevButtonClick = () => {
        navigate(`?${pageQueryParamName}=${currentPage - 1}`)
    };

    const onNextButtonClick = () => {
        navigate(`?${pageQueryParamName}=${currentPage + 1}`)
    };

    const onLastButtonClick = () => {
        navigate(`?${pageQueryParamName}=${currentPage}=${totalPages}`)
    };

    return (
        <Container >
            <Prev>
                <First onClick={onFirstButtonClick} disabled={disablePrev}>
                    <img src="images/prev.svg" /> First
                </First>
                <Previous onClick={onPrevButtonClick} disabled={disablePrev}>
                    <img src="images/prev.svg" /> Previous
                </Previous>
            </Prev>
            <Pages>
                Page <span>{currentPage}</span> of <span>{totalPages}</span>
            </Pages>
            <Nex>
                <Next onClick={onNextButtonClick} disabled={disableNext}>
                    Next <img src="images/next.svg" />
                </Next>
                <Last onClick={onLastButtonClick} disabled={disableNext}>
                    Last <img src="images/next.svg" />
                </Last>
            </Nex>
        </Container>
    )
}

export default Pagination;