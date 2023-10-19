import React, { useEffect, useState } from 'react';
import { Container, Title, FamousPeople, Person, Image, Name } from './styled';
import axios from 'axios';
import Pagination from '../Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { selectPeople, selectPeopleLoading } from './peopleSlice';
import { fetchPeople } from './apiPeople';
import store from '../PersonDetail/store';

const People = () => {

    const dispatch = useDispatch();
    const people = useSelector(selectPeople);
    console.log("Wynik people:", selectPeople(store.getState()))
    const isLoading = useSelector(selectPeopleLoading);
    const isError = useSelector(selectPeopleLoading);

    useEffect(() => {
        fetchPeople(dispatch)
    }, [dispatch]);

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
               {people? people.map((person) => (
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
            <Pagination />
        </Container>
    )
}

export default People;