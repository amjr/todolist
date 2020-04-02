import React from 'react';
import styled from 'styled-components';
import * as colors from 'colors';
import { IconButton, styled as materialStyled, Tooltip } from '@material-ui/core/';
import { Add, Delete } from '@material-ui/icons';

export default () => (
  <Sidebar>
    <Tooltip title="Adicionar novo item" aria-label="Adicionar novo item" placement="right">
      <div>
        <AddButton variant="contained" aria-label="adicionar novo item">
          <Add />
        </AddButton>
      </div>
    </Tooltip>

    <Tooltip title="Remover item" aria-label="Remover item" placement="right">
      <div>
        <RemoveButton variant="contained" aria-label="adicionar novo item">
          <Delete />
        </RemoveButton>
      </div>
    </Tooltip>
  </Sidebar>
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

const AddButton = materialStyled(({ ...other }) => <IconButton {...other} />)({
  backgroundColor: colors.midGreen,
  color: '#fff',
  boxShadow: 'none !important',
  marginBottom: 5,
  '&:hover': {
    backgroundColor: colors.darkGreen,
  },
});

const RemoveButton = materialStyled(({ ...other }) => <IconButton {...other} />)({
  backgroundColor: colors.midRed,
  color: '#fff',
  boxShadow: 'none !important',
  marginBottom: 5,
  '&:hover': {
    backgroundColor: colors.darkRed,
  },
});
