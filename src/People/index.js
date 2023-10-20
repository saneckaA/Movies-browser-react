import React, { useEffect, useState } from 'react';
import { Container, Title, FamousPeople, Person, Image, Name } from './styled';

import Pagination from '../Pagination';
import pageQueryParamName from '../pageQueryParamName';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryParamater } from '../queryParameters';
import { selectPeople, selectPeopleLoading, selectPeopleTotalPages } from './peopleSlice';
import { fetchPeople } from './apiPeople';

const People = () => {

    const dispatch = useDispatch();
    const people = useSelector(selectPeople);
    const isLoading = useSelector(selectPeopleLoading);
    const isError = useSelector(selectPeopleLoading);
    const currentPage = +useQueryParamater(pageQueryParamName) || 1;
    const pageQuery = +useQueryParamater(pageQueryParamName) || 1;
    const totalPages = useSelector(selectPeopleTotalPages);

    useEffect(() => {
        fetchPeople(dispatch, pageQuery)
    }, [dispatch, pageQuery]);

    if (isLoading) {
        return <div>Loading..</div>
    }

    if (isError) {
        return <div>Error</div>
    }

    return (
        <Container>
            <Title>
                Popular people
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
            />
        </Container>
    )
}

export default People;