import React, { useEffect, useState } from 'react';
import {
    Container,
    BcgContainer,
    MainPoster,
    TitleAndRating,
    IconBcg,
    AverageBcg,
    VotesBcg,
    MovieTitle,
    InfoBar,
    Details,
    Cast,
    Crew,
    Genres,
    Genre,
    Poster,
    Informations,
    Title,
    Year,
    ProductionAndDate,
    Production,
    ReleaseDate,
    Rating,
    Icon,
    Average,
    IconAndAverage,
    Votes,
    Overview,
    CastTitle,
    People,
    Person,
    Image,
    RealName,
    MovieName,
    Job
} from './styled';
import {useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCast, selectCrew, selectMovieDetails, selectMovieStatus } from './movieSlice';
import { fetchCredits, fetchMovie } from './apiMovie';
import Error from '../Error';
import NoResults from '../NoResults';
import store from './store';


const MovieDetail = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const movieId = searchParams.get('id');
    console.log('Movie id:', movieId);

    const movie = useSelector((state) => selectMovieDetails(state));
    console.log("Wynik movie:", selectMovieDetails(store.getState()))
    const cast = useSelector((state) => selectCast(state));
    console.log("Wynik cast:", selectCast(store.getState()))
    const crew = useSelector((state) => selectCast(state));
    console.log("Wynik crew:", selectCrew(store.getState()))
    const status = useSelector((state) => selectMovieStatus(state));

    useEffect(() => {
        dispatch(fetchMovie(movieId));
        dispatch(fetchCredits(movieId));
    }, [dispatch, movieId]);

    if (status === "loading") {
        return <div>Loading..</div>
    } else if (status === "fail") {
        return <Error />
    } else if (status === "noResult") {
        return <NoResults />
    };

    return (
        <Container >
            <BcgContainer>
                <MainPoster
                    url={movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                        : 'images.Video.svg'
                    }
                >
                    <TitleAndRating>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <Rating background>
                            <IconAndAverage>
                                <IconBcg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.1451 8.54101L16.0641 7.51201L12.9011 1.10001C12.8092 0.943866 12.6781 0.814432 12.5207 0.724507C12.3634 0.634582 12.1853 0.58728 12.0041 0.58728C11.8229 0.58728 11.6449 0.634582 11.4875 0.724507C11.3302 0.814432 11.1991 0.943866 11.1071 1.10001L7.93814 7.51201L0.857139 8.54101C0.672479 8.56766 0.498959 8.64545 0.356195 8.76556C0.213431 8.88568 0.107117 9.04334 0.0492738 9.22072C-0.00856983 9.3981 -0.0156366 9.58813 0.0288724 9.76931C0.0733813 9.9505 0.167691 10.1156 0.301139 10.246L5.42614 15.24L4.21714 22.293C4.18563 22.4769 4.2062 22.666 4.27652 22.8388C4.34684 23.0116 4.46411 23.1613 4.61507 23.271C4.76603 23.3806 4.94465 23.4459 5.13075 23.4593C5.31685 23.4727 5.50299 23.4338 5.66814 23.347L12.0011 20.018L18.3341 23.347C18.4993 23.4338 18.6854 23.4727 18.8715 23.4593C19.0576 23.4459 19.2362 23.3806 19.3872 23.271C19.5382 23.1613 19.6554 23.0116 19.7258 22.8388C19.7961 22.666 19.8166 22.4769 19.7851 22.293L18.5761 15.24L23.7011 10.246C23.8345 10.1158 23.9289 9.95079 23.9735 9.76975C24.0181 9.58871 24.0112 9.39881 23.9536 9.22148C23.896 9.04415 23.7899 8.88646 23.6474 8.76622C23.5049 8.64598 23.3316 8.56797 23.1471 8.54101H23.1451Z" fill="#FCD420" />
                                    </svg>
                                </IconBcg>
                                <AverageBcg><span>{movie.vote_average ? movie.vote_average.toFixed(1) : undefined}</span> / 10</AverageBcg>
                            </IconAndAverage>
                            <VotesBcg>{movie.vote_count} votes</VotesBcg>
                        </Rating>
                    </TitleAndRating>
                </MainPoster>
            </BcgContainer>
            <InfoBar >
                <Details>
                    <Poster>
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : 'images/Video.svg'} />
                    </Poster>
                    <Informations>
                        <Title>{movie.title}</Title>
                        <Year>{movie.release_date ? movie.release_date.slice(0, 4) : "No information"}</Year>
                        <ProductionAndDate>
                            <Production><span>Production:</span> {movie.production_countries ? movie.production_countries.map(country => country.name).join(', ') : "No information"}  </Production>
                            <ReleaseDate><span>Release date:</span> {movie.release_date} </ReleaseDate>
                        </ProductionAndDate>
                        <Rating>
                            <Icon>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.1451 8.54101L16.0641 7.51201L12.9011 1.10001C12.8092 0.943866 12.6781 0.814432 12.5207 0.724507C12.3634 0.634582 12.1853 0.58728 12.0041 0.58728C11.8229 0.58728 11.6449 0.634582 11.4875 0.724507C11.3302 0.814432 11.1991 0.943866 11.1071 1.10001L7.93814 7.51201L0.857139 8.54101C0.672479 8.56766 0.498959 8.64545 0.356195 8.76556C0.213431 8.88568 0.107117 9.04334 0.0492738 9.22072C-0.00856983 9.3981 -0.0156366 9.58813 0.0288724 9.76931C0.0733813 9.9505 0.167691 10.1156 0.301139 10.246L5.42614 15.24L4.21714 22.293C4.18563 22.4769 4.2062 22.666 4.27652 22.8388C4.34684 23.0116 4.46411 23.1613 4.61507 23.271C4.76603 23.3806 4.94465 23.4459 5.13075 23.4593C5.31685 23.4727 5.50299 23.4338 5.66814 23.347L12.0011 20.018L18.3341 23.347C18.4993 23.4338 18.6854 23.4727 18.8715 23.4593C19.0576 23.4459 19.2362 23.3806 19.3872 23.271C19.5382 23.1613 19.6554 23.0116 19.7258 22.8388C19.7961 22.666 19.8166 22.4769 19.7851 22.293L18.5761 15.24L23.7011 10.246C23.8345 10.1158 23.9289 9.95079 23.9735 9.76975C24.0181 9.58871 24.0112 9.39881 23.9536 9.22148C23.896 9.04415 23.7899 8.88646 23.6474 8.76622C23.5049 8.64598 23.3316 8.56797 23.1471 8.54101H23.1451Z" fill="#FCD420" />
                                </svg>
                            </Icon>
                            <Average><span>{movie.vote_average ? movie.vote_average.toFixed(1) : "No information"}</span> / 10</Average>
                            <Votes>{movie.vote_count} votes</Votes>
                        </Rating>
                        <Overview>{movie.overview}</Overview>
                    </Informations>
                </Details>
                <Cast>
                    <CastTitle>Cast</CastTitle>
                    <People>
                        {cast.map((cast) => (
                            <>
                                <Person key={cast.credit_it} to={{
                                    pathname: "/personDetail",
                                    search: `?id=${cast.id}`
                                }}>
                                    <Image><img src={cast.profile_path ? `https://image.tmdb.org/t/p/original${cast.profile_path}` : 'images/Profile.png'} /></Image>
                                    <RealName>{cast.name}</RealName>
                                    <MovieName>{cast.character}</MovieName>
                                </Person>
                            </>
                        ))}
                    </People>
                </Cast>
                <Crew>
                    <CastTitle>Crew</CastTitle>
                    <People>
                        {crew.map((crew) => (
                            <>
                                <Person  >
                                    <Image><img src={crew.profile_path ? `https://image.tmdb.org/t/p/original${crew.profile_path}` : 'images/Profile.png'} /></Image>
                                    <RealName>{crew.name}</RealName>
                                    <Job>{crew.job}</Job>
                                </Person>
                            </>
                        ))}
                    </People>
                </Crew>
            </InfoBar>
        </Container >
    )
}
export default MovieDetail;
