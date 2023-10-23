import React, { useEffect, useState } from 'react';
import { Container, Search } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQueryParamater, useReplaceQueryParameter } from '../queryParameters';
import searchQueryParamName from '../searchQueryParamName';
import { setSearchQuery } from '../Movies/moviesSlice';
import pageQueryParamName from '../pageQueryParamName';
import { moviesSearchFor, peopleSearchFor, searchFor } from '../language';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../LanguageSelect/languageSlice';

const SearchResults = () => {

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
        placeholder={ `${searchFor[language]} ${searchType ? moviesSearchFor[language] : peopleSearchFor[language]}...`}
        value={query || ""}
        onChange={onInputChange}
      >
      </Search>
    </Container>
  )
}

export default SearchResults;