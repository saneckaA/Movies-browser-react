import { useGenres } from "../Movies/apiMovies";
import { Types, Type } from "./styled";

const Genres = ({movie, cast, crew}) => {

    const { genres, isLoadingGen, isErrorGen } = useGenres();

if (isLoadingGen) {
    return <div>Loading genres...</div>
};

if (isErrorGen) {
    return <div>Error loading genres</div>
}

const genreIds = movie ? movie.genre_ids : cast ? cast.genre_ids : crew ? crew.genre_ids : [];

const genreNames = genreIds.map((genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    return genre ? genre.name : undefined;
});

    return (
        <Types>
            {genreNames.map((genreName, index) => (
                <Type key={index}>{genreName}</Type>
            ))}
        </Types>
    )
};

export default Genres;
