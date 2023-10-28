import React from 'react';
import searchQueryParamName from '../searchQueryParamName';
import pageQueryParamName from '../pageQueryParamName';
import { Container, Search } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useQueryParamater, useReplaceQueryParameter } from '../queryParameters';
import { setSearchQuery } from '../Movies/moviesSlice';
import { selectLanguage } from '../LanguageSelect/languageSlice';
import { moviesSearchFor, peopleSearchFor, searchFor } from '../language';

const SearchBar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const query = useQueryParamater(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const language = useSelector(selectLanguage);
  const searchType = location.pathname.includes("movies");

  const onInputChange = ({ target }) => {
    const newSearchQuery = target.value.trim() !== "" ? target.value : "";
    setSearchQuery(newSearchQuery);
    replaceQueryParameter(searchQueryParamName, newSearchQuery);
    navigate(`?${pageQueryParamName}=1&${searchQueryParamName}=${newSearchQuery}`);
  };

  return (
    <Container>
      <Search
        type="text"
        placeholder={`${searchFor[language]} ${searchType ? moviesSearchFor[language] : peopleSearchFor[language]}...`}
        value={query || ""}
        onChange={onInputChange}
      >
      </Search>
    </Container>
  )
}

export default SearchBar;