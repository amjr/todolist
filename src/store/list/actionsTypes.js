export const EDIT_LIST_ITEM = 'list.EDIT_LIST_ITEM';
export const DELETE_LIST_ITEM = 'list.DELETE_LIST_ITEM';
export const DELETE_SELECTED_ITEMS = 'list.DELETE_SELECTED_ITEMS';
export const ADD_ITEM = 'list.ADD_ITEM';

export const edit = (item) => ({
  type: EDIT_LIST_ITEM,
  payload: { item },
});

export const deleteItem = (item) => ({
  type: DELETE_LIST_ITEM,
  payload: { item },
});

export const deletSelectedItems = (list) => ({
  type: DELETE_SELECTED_ITEMS,
  payload: { list },
});

export const addItem = (newItemName) => ({
  type: ADD_ITEM,
  payload: { newItemName },
});
