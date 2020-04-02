import React from 'react';
import styled from 'styled-components';
import { TextField, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';

export default () => (
  <SearchWrapper>
    <TextField label="Buscar item" />

    <IconButton color="primary">
      <Search />
    </IconButton>
  </SearchWrapper>
);

const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;
