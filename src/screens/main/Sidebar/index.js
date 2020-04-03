import React from 'react';
import styled from 'styled-components';
import * as colors from 'colors';
import { SidebarContextConsumer } from 'screens/main/Sidebar/context';
import { IconButton, styled as materialStyled, Tooltip } from '@material-ui/core/';
import { Add, Delete } from '@material-ui/icons';
import Modal from './components/modal';

export default () => (
  <SidebarContextConsumer>
    {(context) => (
      <Sidebar>
        <Tooltip title="Adicionar novo item" aria-label="Adicionar novo item" placement="right">
          <div>
            <AddButton
              variant="contained"
              aria-label="adicionar novo item"
              onClick={() => context.toggleNewItemModal(!context.newItemModal)}
            >
              <Add />
            </AddButton>
          </div>
        </Tooltip>

        <Tooltip title="Remover itens selecionados" aria-label="Remover itens selecionados" placement="right">
          <div>
            <RemoveButton variant="contained" aria-label="Remover itens selecionados" disabled={!context.hasChecked}>
              <Delete onClick={context.deletSelectedItems} />
            </RemoveButton>
          </div>
        </Tooltip>

        <Modal />
      </Sidebar>
    )}
  </SidebarContextConsumer>
);

const Sidebar = styled.div`
  align-items: center;
  background-color: ${colors.lightGrey};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: calc(100vh - 16px);
  justify-content: flex-start;
  width: calc(64px - 16px);
  padding: 8px;
`;

// eslint-disable-next-line react/jsx-props-no-spreading
const AddButton = materialStyled(({ ...other }) => <IconButton {...other} />)({
  backgroundColor: colors.midGreen,
  color: '#fff',
  boxShadow: 'none !important',
  marginBottom: 5,
  '&:hover': {
    backgroundColor: colors.darkGreen,
  },
});

// eslint-disable-next-line react/jsx-props-no-spreading
const RemoveButton = materialStyled(({ ...other }) => <IconButton {...other} />)({
  backgroundColor: colors.midRed,
  color: '#fff',
  boxShadow: 'none !important',
  marginBottom: 5,
  '&:hover': {
    backgroundColor: colors.darkRed,
  },
});
