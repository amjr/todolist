import React from 'react';
import styled from 'styled-components';
import { ContainerContextConsumer } from 'screens/main/Container/context';
import {
  Grid, Checkbox, Typography, styled as materialStyled, IconButton, Tooltip,
} from '@material-ui/core';
import { Delete, Check } from '@material-ui/icons';
import * as colors from 'colors';

export default () => (
  <ListWrapper>
    <Grid container direction="column">
      <ContainerContextConsumer>
        {(context) => context.list.map((item) => (
            <Row>
              <Grid item xs={1} styled={{}}>
                <Cel center>
                  <Typography
                    color={item.done ? 'textSecondary' : 'textPrimary'}
                    style={{ textDecoration: item.done ? 'line-through' : 'none' }}
                  >
                    {item.id}
                  </Typography>
                </Cel>
              </Grid>

              <Grid item xs={1}>
                <Cel center>
                  <Tooltip
                    title={`${item.checked ? 'Deselecionar' : 'Selecionar'} item`}
                    aria-label={`${item.checked ? 'Deselecionar' : 'Selecionar'} item`}
                    placement="top"
                  >
                    <Checkbox color="primary" checked={item.checked} onChange={() => context.toggleItem(item)} />
                  </Tooltip>
                </Cel>
              </Grid>

              <Grid item xs={9}>
                <Cel>
                  <Typography
                    color={item.done ? 'textSecondary' : 'textPrimary'}
                    style={{ textDecoration: item.done ? 'line-through' : 'none' }}
                  >
                    {item.name}
                  </Typography>
                </Cel>
              </Grid>

              <Grid item xs={1}>
                <Cel spaceAround>
                  <Tooltip title="Finalizar item" aria-label="Finalizar item" placement="top">
                    <div>
                      <FinishButton
                        variant="contained"
                        aria-label="Finalizar item"
                        onClick={() => context.togleFinished(item)}
                      >
                        <Check />
                      </FinishButton>
                    </div>
                  </Tooltip>

                  <Tooltip title="Remover item" aria-label="Remover itens selecionados" placement="top">
                    <div>
                      <RemoveButton
                        variant="contained"
                        aria-label="Remover item"
                        onClick={() => context.deleteItem(item)}
                      >
                        <Delete fontSize="small" />
                      </RemoveButton>
                    </div>
                  </Tooltip>
                </Cel>
              </Grid>
            </Row>
        ))
        }
      </ContainerContextConsumer>
    </Grid>
  </ListWrapper>
);

const ListWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Row = styled.div`
  align-items: center;
  border: 1px solid ${colors.midGrey};
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin: 0px 15px 15px 15px;
  max-height: 45px;
  min-width: calc(100% - 30px);
`;

const Cel = styled.div`
  align-items: center;
  display: flex;
  ${(props) => props.center && 'justify-content: center;'}
  ${(props) => props.spaceAround && 'justify-content: space-around;'}
`;

const FinishButton = materialStyled(({ ...other }) => <IconButton {...other} />)({
  backgroundColor: colors.midGreen,
  color: '#fff',
  boxShadow: 'none !important',
  marginBottom: 5,
  height: 30,
  width: 30,
  margin: 0,
  padding: 0,

  '&:hover': {
    backgroundColor: colors.darkGreen,
  },
});

const RemoveButton = materialStyled(({ ...other }) => <IconButton {...other} />)({
  backgroundColor: colors.midRed,
  color: '#fff',
  boxShadow: 'none !important',
  marginBottom: 5,
  height: 30,
  width: 30,
  margin: 0,
  padding: 0,

  '&:hover': {
    backgroundColor: colors.darkRed,
  },
});
