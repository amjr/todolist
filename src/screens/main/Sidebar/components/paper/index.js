import React, { useEffect, useRef } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { SidebarContextConsumer } from 'screens/main/Sidebar/context';
import * as colors from 'colors';

export default () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleKeyPress = (e, addItem, toggleNewItemModal) => {
    if (e.key === 'Enter') {
      addItem();
      toggleNewItemModal(false);
    }
  };

  return (
    <SidebarContextConsumer>
      {(context) => (
        <Paper>
          <Typography>Nova tarefa</Typography>
          <TextField
            label="Nome"
            onChange={(e) => context.setNewItemName(e.target.value)}
            value={context.newItemName}
            onKeyPress={(e) => {
              handleKeyPress(e, context.addItem, context.toggleNewItemModal);
            }}
            inputRef={inputRef}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              context.addItem();
              context.toggleNewItemModal(false);
            }}
          >
            Adicionar
          </Button>
        </Paper>
      )}
    </SidebarContextConsumer>
  );
};

const Paper = styled.div`
  background-color: #fff;
  border: 2px solid ${colors.darkGrey};
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  outline: none;
  padding: 15px;
  width: 30%;

  button {
    margin-top: 10px;
    max-width: 100px;
  }
`;
