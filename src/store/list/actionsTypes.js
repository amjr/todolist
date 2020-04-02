export const EDIT_LIST_ITEM = 'item.EDIT_LIST_ITEM';
export const DELETE_LIST_ITEM = 'item.DELETE_LIST_ITEM';
export const DELETE_SELECTED_ITEMS = 'item.DELETE_SELECTED_ITEMS';

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
