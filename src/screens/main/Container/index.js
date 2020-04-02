import React from 'react';
import styled from 'styled-components';
import Search from './components/Search';
import List from './components/List';

export default () => (
  <Container>
    <Search />
    <List />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
