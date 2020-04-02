import React from 'react';
import styled from 'styled-components';
import Sidebar from 'screens/main/Sidebar';
import Container from 'screens/main/Container';

export default () => (
  <GlobalWrapper>
    <Sidebar />
    <Container />
  </GlobalWrapper>
);

const GlobalWrapper = styled.div`
  display: flex;
  flex: 1;
`;
