import React, { useEffect, useState } from 'react';
import { Container, Title, FamousPeople, Person, Image, Name } from './styled';
import axios from 'axios';

const People = () => {

    const [people, setPeople] = useState([]);

    const fetchPeople = async () => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/person/popular?api_key=75950885b0db888f999efec40cdae6e8");
            setPeople(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error("Problem with fetching people data", error)
        }
    };

    useEffect(() => {
        fetchPeople();
    }, []);

    return (
        <Container>
            <Title>
                Popular people
            </Title>
            <FamousPeople>
                {people.map((person) => (
                    <>
                        <Person key={person.id} to={{
                            pathname: "/personDetail",
                            search: `?id=${person.id}`
                        }}>
                            <Image> <img src={person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}` : "images/Profile.png"} /></Image>
                            <Name>{person.name}</Name>
                        </Person>
                    </>
                ))}
            </FamousPeople>
        </Container>
    )
}

export default People;