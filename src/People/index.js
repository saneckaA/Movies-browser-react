import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import Loading from '../Loading';
import SearchResultsLoading from '../SearchResultsLoading';
import NoResults from '../NoResults';
import Error from '../Error';
import pageQueryParamName from '../pageQueryParamName';
import searchQueryParamName from '../searchQueryParamName';
import { Container, Title, FamousPeople, Person, Image, Name } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryParamater } from '../queryParameters';
import { fetchPeople } from './apiPeople';
import { selectPeopleByQuery, selectPeopleLoading, selectPeopleTotalPages, selectPeopleTotalResults } from './peopleSlice';
import { selectLanguage } from '../LanguageSelect/languageSlice';
import { popularPeople, searchResultsFor } from '../language';
import ProfileImg from '../images/Profile.svg';

const People = () => {

    const dispatch = useDispatch();
    const searchQuery = useQueryParamater(searchQueryParamName) || "";
    const pageQuery = +useQueryParamater(pageQueryParamName) || 1;
    const currentPage = +useQueryParamater(pageQueryParamName) || 1;
    const people = useSelector(state => selectPeopleByQuery(state, searchQuery));
    const isLoading = useSelector(selectPeopleLoading);
    const totalPages = useSelector(selectPeopleTotalPages);
    const totalResults = useSelector(selectPeopleTotalResults);
    const language = useSelector(selectLanguage);

    useEffect(() => {
        fetchPeople(dispatch, pageQuery, searchQuery)
    }, [dispatch, pageQuery, searchQuery]);

    if (isLoading && !searchQuery) {
        return <Loading />;
    } else if (isLoading && searchQuery) {
        return <SearchResultsLoading searchQuery={searchQuery} />
    };

    return (
        <Container>
            {!isLoading ? (
                people.length ? (
                    <>
                        <Title>
                            {searchQuery ? `${searchResultsFor[language]}  "${searchQuery}" (${totalResults})` : popularPeople[language]}
                        </Title>
                        <FamousPeople>
                            {people ? people.map((person) => (
                                <>
                                    <Person key={person.id} to={{
                                        pathname: "/personDetail",
                                        search: `?id=${person.id}`
                                    }}>
                                        <Image> <img src={person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}` : ProfileImg} /></Image>
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
                    </>
                ) : (
                    <NoResults searchQuery={searchQuery} />
                )
            ) : (
                <Error />
            )}
        </Container>
    )
};

export default People;