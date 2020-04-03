import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { ContainerContextConsumer } from 'screens/main/Container/context';

export default () => {
  const [searchBy, setSearchBy] = useState('');

  const handleKeyPress = (e, filterItems) => {
    if (e.key === 'Escape') {
      setSearchBy('');
      filterItems('');
    }
  };

  const handleTChange = (e, filterItems) => {
    setSearchBy(e.target.value);
    filterItems(e.target.value);
  };

  return (
    <ContainerContextConsumer>
      {(context) => (
        <SearchWrapper className="SearchWrapper">
          <TextField
            label="Buscar item"
            onChange={(e) => handleTChange(e, context.filterItems)}
            value={searchBy}
            onKeyDown={(e) => handleKeyPress(e, context.filterItems)}
          />
        </SearchWrapper>
      )}
    </ContainerContextConsumer>
  );
};

const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;

  > div {
    width: 30%;
  }
`;
