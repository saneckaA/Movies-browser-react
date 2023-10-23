import React, { useEffect, useState } from 'react';
import { Container, Title, FamousPeople, Person, Image, Name } from './styled';

import Pagination from '../Pagination';
import pageQueryParamName from '../pageQueryParamName';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryParamater } from '../queryParameters';
import { selectPeople, selectPeopleLoading, selectPeopleTotalPages, selectPeopleTotalResults } from './peopleSlice';
import { fetchPeople } from './apiPeople';
import searchQueryParamName from '../searchQueryParamName';
import { selectLanguage } from '../LanguageSelect/languageSlice';
import { popularPeople, searchResultsFor } from '../language';

const People = () => {

    const dispatch = useDispatch();
    const people = useSelector(selectPeople);
    const isLoading = useSelector(selectPeopleLoading);
    const isError = useSelector(selectPeopleLoading);
    const currentPage = +useQueryParamater(pageQueryParamName) || 1;
    const pageQuery = +useQueryParamater(pageQueryParamName) || 1;
    const totalPages = useSelector(selectPeopleTotalPages);
    const searchQuery = useQueryParamater(searchQueryParamName) || "";
    const totalResults = useSelector(selectPeopleTotalResults);
    const language = useSelector(selectLanguage);

    useEffect(() => {
        fetchPeople(dispatch, pageQuery, searchQuery)
    }, [dispatch, pageQuery, searchQuery]);

    if (isLoading) {
        return <div>Loading..</div>
    }

    if (isError) {
        return <div>Error</div>
    }

    return (
        <Container>
            <Title>
              {searchQuery ? `${searchResultsFor[language ]}  "${searchQuery}" (${totalResults})` : popularPeople[language]} 
            </Title>
            <FamousPeople>
                {people ? people.map((person) => (
                    <>
                        <Person key={person.id} to={{
                            pathname: "/personDetail",
                            search: `?id=${person.id}`
                        }}>
                            <Image> <img src={person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}` : "images/Profile.png"} /></Image>
                            <Name>{person.name}</Name>
                        </Person>
                    </>
                )) : undefined}
            </FamousPeople>
            <Pagination
                currentPage={currentPage}
                pageQueryParamName={pageQueryParamName}
                totalPages={totalPages}
                searchQueryParamName={searchQueryParamName}
                searchQuery={searchQuery}
               
            />
        </Container>
    )
}

export default People;