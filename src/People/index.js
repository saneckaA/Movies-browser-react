import React from 'react';
import { Container, Title, FamousPeople, Person, Image, Name } from './styled';

const People = () => {
    return (
        <Container>
            <Title>
                Popular people
            </Title>
            <FamousPeople>
                <Person>
                    <Image> <img src="images/poster.png" /></Image>
                    <Name>Mulan</Name>
                </Person>
                <Person>
                    <Image> <img src="images/poster.png" /></Image>
                    <Name>Mulan</Name>
                </Person>
                <Person>
                    <Image> <img src="images/poster.png" /></Image>
                    <Name>Mulan</Name>
                </Person>
                <Person>
                    <Image> <img src="images/poster.png" /></Image>
                    <Name>Mulan</Name>
                </Person>
                <Person>
                    <Image> <img src="images/poster.png" /></Image>
                    <Name>Mulan</Name>
                </Person>
                <Person>
                    <Image> <img src="images/poster.png" /></Image>
                    <Name>Mulan</Name>
                </Person>
                <Person>
                    <Image> <img src="images/poster.png" /></Image>
                    <Name>Mulan</Name>
                </Person>
            </FamousPeople>
        </Container>
    )
}

export default People;