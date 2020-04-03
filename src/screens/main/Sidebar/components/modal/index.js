import React from 'react';
import {
  Modal, Backdrop, Fade, styled as materialStyled,
} from '@material-ui/core';
import { SidebarContextConsumer } from 'screens/main/Sidebar/context';
import Paper from '../paper';

export default function TransitionsModal() {
  return (
    <SidebarContextConsumer>
      {(context) => (
        <>
          <StyledModal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={context.newItemModal}
            onClose={() => context.toggleNewItemModal(!context.newItemModal)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={context.newItemModal}>
              <Paper />
            </Fade>
          </StyledModal>
        </>
      )}
    </SidebarContextConsumer>
  );
}

const StyledModal = materialStyled(({ ...other }) => <Modal {...other} />)({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});
