import React from 'react';
import styled from 'styled-components';
import Sidebar from 'screens/main/Sidebar';
import Container from 'screens/main/Container';
import { ContainerContextProvider } from 'screens/main/Container/context';
import { SidebarContextProvider } from 'screens/main/Sidebar/context';

export default () => (
  <GlobalWrapper>
    <SidebarContextProvider>
      <Sidebar />
    </SidebarContextProvider>

    <ContainerContextProvider>
      <Container />
    </ContainerContextProvider>
  </GlobalWrapper>
);

const GlobalWrapper = styled.div`
  display: flex;
  flex: 1;
`;
