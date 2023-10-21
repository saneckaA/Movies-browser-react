import React, { useEffect, useState } from 'react';
import { Container, Search } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQueryParamater, useReplaceQueryParameter } from '../queryParameters';
import searchQueryParamName from '../searchQueryParamName';
import { useOnInputSearchChange } from './useOnInputSearchChange';
import { setSearchQuery } from '../Movies/moviesSlice';
import pageQueryParamName from '../pageQueryParamName';

const SearchResults = () => {

  const navigate = useNavigate();
  const query = useQueryParamater(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    const newSearchQuery = target.value.trim() !== "" ? target.value : undefined;
    replaceQueryParameter(searchQueryParamName, newSearchQuery);
    setSearchQuery(newSearchQuery);
    navigate(`?${pageQueryParamName}=1&${searchQueryParamName}=${newSearchQuery}`);
  };

  return (
    <Container>
      <Search
        type="text"
        placeholder="Search for movies.."
        value={query || ""}
        onChange={onInputChange}
      >
      </Search>
    </Container>
  )
}

export default SearchResults;