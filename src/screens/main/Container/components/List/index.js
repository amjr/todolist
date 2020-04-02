import React from 'react';
import styled from 'styled-components';
import { ContainerContextConsumer } from 'screens/main/Container/context';

export default () => (
  <ListWrapper>
    <ContainerContextConsumer>
      {(context) => <div>List</div>}
    </ContainerContextConsumer>
  </ListWrapper>
);

const ListWrapper = styled.div`
  display: flex;
  flex: 1;
`;
