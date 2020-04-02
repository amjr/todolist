import * as types from './actionsTypes';

export const edit = (item) => async (dispatch) => {
  dispatch(types.edit(item));
};

export const deleteItem = (item) => async (dispatch) => {
  dispatch(types.deleteItem(item));
};

export const deletSelectedItems = (list) => async (dispatch) => {
  dispatch(types.deletSelectedItems(list));
};
