import React, { useEffect } from 'react';
import Loading from '../Loading';
import Error from '../Error';
import Genres from '../Genres';
import ReadMoreButton from '../ReadMoreButton';
import {
    Container,
    Details,
    MoviesCast,
    MoviesCrew,
    Image,
    Information,
    Name,
    Birth,
    Date,
    Place,
    Overview,
    MediaOverview,
    HeaderName,
    Movies,
    Movie,
    Poster,
    Description,
    MovieTitle,
    CharacterAndYear,
    Rating,
    Icon,
    Average,
    Votes
} from './styled';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCredits, fetchPerson } from './apiPerson';
import { selectCast, selectCastLength, selectCrew, selectCrewLength, selectPersonDetails, selectPersonError, selectPersonLoading } from './personSlice';
import { selectLanguage } from '../LanguageSelect/languageSlice';
import { dateOfBirth, moviesCast, moviesCrew, placeOfBirth, votes } from '../language';

const PersonDetail = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const personId = searchParams.get('id');
    const person = useSelector((state) => selectPersonDetails(state));
    const cast = useSelector((state) => selectCast(state));
    const crew = useSelector((state) => selectCrew(state));
    const castLength = useSelector(selectCastLength);
    const crewLength = useSelector(selectCrewLength);
    const isLoading = useSelector(selectPersonLoading);
    const isError = useSelector(selectPersonError);
    const language = useSelector(selectLanguage);

    useEffect(() => {
        dispatch(fetchPerson(personId, language));
        dispatch(fetchCredits(personId, language));
    }, [dispatch, personId, language]);

    if (isError) {
        return <Error />
    };

    return (
        <Container>
            {isLoading ? <Loading /> :
                <>
                    <Details>
                        <Image src={person.profile_path ? `https://image.tmdb.org/t/p/original${person.profile_path}` : 'images/Profile.svg'} />
                        <Information>
                            <Name>{person.name}</Name>
                            <Birth>
                                <Date><span>{dateOfBirth[language]}:</span> {person.birthday ? person.birthday : ""} </Date>
                                <Place><span>{placeOfBirth[language]}:</span> {person.place_of_birth ? person.place_of_birth : ""} </Place>
                                <Overview>
                                    {person.biography ? (
                                        <ReadMoreButton content={person.biography} />
                                    ) : ""}
                                </Overview>
                            </Birth>
                        </Information>
                        <MediaOverview>
                            {person.biography ? (
                                <ReadMoreButton content={person.biography} />
                            ) : ""}
                        </MediaOverview>
                    </Details>
                    <MoviesCast>
                        <HeaderName>{moviesCast[language]} ({castLength})</HeaderName>
                        <Movies>
                            {cast.map((cast) => (
                                <>
                                    <Movie key={cast.id} to={{
                                        pathname: "/movieDetail",
                                        search: `?id=${cast.id}`,
                                    }} >
                                        <Poster><img src={cast.poster_path ? `https://image.tmdb.org/t/p/original${cast.poster_path}` : 'images/Video.svg'} /></Poster>
                                        <Description>
                                            <MovieTitle>{cast.title}</MovieTitle>
                                            <CharacterAndYear>{cast.character} ({cast.release_date.slice(0, 4)})</CharacterAndYear>
                                            <Genres cast={cast} />
                                            <Rating>
                                                <Icon>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M23.1451 8.54101L16.0641 7.51201L12.9011 1.10001C12.8092 0.943866 12.6781 0.814432 12.5207 0.724507C12.3634 0.634582 12.1853 0.58728 12.0041 0.58728C11.8229 0.58728 11.6449 0.634582 11.4875 0.724507C11.3302 0.814432 11.1991 0.943866 11.1071 1.10001L7.93814 7.51201L0.857139 8.54101C0.672479 8.56766 0.498959 8.64545 0.356195 8.76556C0.213431 8.88568 0.107117 9.04334 0.0492738 9.22072C-0.00856983 9.3981 -0.0156366 9.58813 0.0288724 9.76931C0.0733813 9.9505 0.167691 10.1156 0.301139 10.246L5.42614 15.24L4.21714 22.293C4.18563 22.4769 4.2062 22.666 4.27652 22.8388C4.34684 23.0116 4.46411 23.1613 4.61507 23.271C4.76603 23.3806 4.94465 23.4459 5.13075 23.4593C5.31685 23.4727 5.50299 23.4338 5.66814 23.347L12.0011 20.018L18.3341 23.347C18.4993 23.4338 18.6854 23.4727 18.8715 23.4593C19.0576 23.4459 19.2362 23.3806 19.3872 23.271C19.5382 23.1613 19.6554 23.0116 19.7258 22.8388C19.7961 22.666 19.8166 22.4769 19.7851 22.293L18.5761 15.24L23.7011 10.246C23.8345 10.1158 23.9289 9.95079 23.9735 9.76975C24.0181 9.58871 24.0112 9.39881 23.9536 9.22148C23.896 9.04415 23.7899 8.88646 23.6474 8.76622C23.5049 8.64598 23.3316 8.56797 23.1471 8.54101H23.1451Z" fill="#FCD420" />
                                                    </svg>
                                                </Icon>
                                                <Average>
                                                    {cast.vote_average.toFixed(1)}
                                                </Average>
                                                <Votes>
                                                    {cast.vote_count} {votes[language]}
                                                </Votes>
                                            </Rating>
                                        </Description>

                                    </Movie>
                                </>
                            ))}
                        </Movies>
                    </MoviesCast>
                    <MoviesCrew>
                        <HeaderName>{moviesCrew[language]} ({crewLength})</HeaderName>
                        <Movies>
                            {crew.map((crew) => (
                                <>
                                    <Movie key={crew.id} to={{
                                        pathname: "/movieDetail",
                                        search: `?id=${crew.id}`,
                                    }}>
                                        <Poster><img src={crew.poster_path ? `https://image.tmdb.org/t/p/original${crew.poster_path}` : 'images/Video.svg'} /></Poster>
                                        <Description>
                                            <MovieTitle>{crew.title}</MovieTitle>
                                            <CharacterAndYear>{crew.job} ({crew.release_date.slice(0, 4)})</CharacterAndYear>
                                            <Genres crew={crew} />
                                        </Description>
                                        <Rating>
                                            <Icon>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.1451 8.54101L16.0641 7.51201L12.9011 1.10001C12.8092 0.943866 12.6781 0.814432 12.5207 0.724507C12.3634 0.634582 12.1853 0.58728 12.0041 0.58728C11.8229 0.58728 11.6449 0.634582 11.4875 0.724507C11.3302 0.814432 11.1991 0.943866 11.1071 1.10001L7.93814 7.51201L0.857139 8.54101C0.672479 8.56766 0.498959 8.64545 0.356195 8.76556C0.213431 8.88568 0.107117 9.04334 0.0492738 9.22072C-0.00856983 9.3981 -0.0156366 9.58813 0.0288724 9.76931C0.0733813 9.9505 0.167691 10.1156 0.301139 10.246L5.42614 15.24L4.21714 22.293C4.18563 22.4769 4.2062 22.666 4.27652 22.8388C4.34684 23.0116 4.46411 23.1613 4.61507 23.271C4.76603 23.3806 4.94465 23.4459 5.13075 23.4593C5.31685 23.4727 5.50299 23.4338 5.66814 23.347L12.0011 20.018L18.3341 23.347C18.4993 23.4338 18.6854 23.4727 18.8715 23.4593C19.0576 23.4459 19.2362 23.3806 19.3872 23.271C19.5382 23.1613 19.6554 23.0116 19.7258 22.8388C19.7961 22.666 19.8166 22.4769 19.7851 22.293L18.5761 15.24L23.7011 10.246C23.8345 10.1158 23.9289 9.95079 23.9735 9.76975C24.0181 9.58871 24.0112 9.39881 23.9536 9.22148C23.896 9.04415 23.7899 8.88646 23.6474 8.76622C23.5049 8.64598 23.3316 8.56797 23.1471 8.54101H23.1451Z" fill="#FCD420" />
                                                </svg>
                                            </Icon>
                                            <Average>
                                                {crew.vote_average.toFixed(1)}
                                            </Average>
                                            <Votes>
                                                {crew.vote_count} {votes[language]}
                                            </Votes>
                                        </Rating>
                                    </Movie>
                                </>
                            ))}
                        </Movies>
                    </MoviesCrew>
                </>
            }
        </Container>
    )
}

export default PersonDetail;