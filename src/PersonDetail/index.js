import React, { useEffect, useState } from 'react';
import {
    Container,
    Details,
    MoviesActor,
    MoviesCrew,
    Image,
    Information,
    Name,
    Birth,
    Date,
    Place,
    Overview,
    Title,
    Movies,
    Movie,
    Poster,
    Description,
    Text,
    CharacterAndYear,
    Types,
    Type,
    Rating
} from './styled';

const PersonDetail = () => {

    return (
        <Container>
            <Details>
                <Image>
                    <img src="images/poster.png" />
                </Image>
                <Information>
                    <Name>Mulan</Name>
                    <Birth>
                        <Date><span>Date of birth:</span> 15.08.1998 </Date>
                        <Place><span>Place of birth:</span> Poland </Place>
                    </Birth>
                    <Overview>
                    </Overview>
                </Information>
            </Details>
            <MoviesActor>
                <Title>Movies - cast ()</Title>
                <Movies>
                    <Movie  >
                        <Poster></Poster>
                        <Description>
                            <Text></Text>
                            <CharacterAndYear></CharacterAndYear>
                        </Description>
                        <Rating></Rating>
                    </Movie>
                </Movies>
            </MoviesActor>
            <MoviesCrew>
                <Title>Movies - crew ()</Title>
                <Movies>
                    <Movie >
                        <Poster></Poster>
                        <Description>
                            <Text></Text>
                            <CharacterAndYear></CharacterAndYear>
                        </Description>
                        <Rating></Rating>
                    </Movie>
                </Movies>
            </MoviesCrew>
        </Container>
    )
}

export default PersonDetail;