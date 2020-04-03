import { findIndex, propEq } from 'ramda';
import * as types from './actionsTypes';

export const initialState = {
  list: [
    {
      id: 1,
      name: 'Desenvolvimento básico da lista 1',
      checked: false,
      done: false,
    },
    {
      id: 2,
      name: 'Desenvolvimento básico da lista 2',
      checked: false,
      done: false,
    },
    {
      id: 3,
      name: 'Desenvolvimento básico da lista 3',
      checked: false,
      done: false,
    },
  ],
};

export default (state = initialState, action = {}) => {
  let newList = null;
  let index = null;
  let item = null;

  switch (action.type) {
    case types.ADD_ITEM:
      newList = [...state.list];

      item = {
        id: newList.length,
        name: action.payload.newItemName,
        checked: false,
        done: false,
      };

      newList.push(item);

      return {
        ...state,
        list: newList,
      };

    case types.DELETE_SELECTED_ITEMS:
      newList = [...state.list].filter((listItem) => {
        const shouldBeRemoved = findIndex(propEq('id', listItem.id), action.payload.list) > -1;
        return !shouldBeRemoved;
      });

      return {
        ...state,
        list: newList,
      };

    case types.DELETE_LIST_ITEM:
      newList = [...state.list];
      index = findIndex(propEq('id', action.payload.item.id), newList);
      newList.splice(index, 1);

      return {
        ...state,
        list: newList,
      };

    case types.EDIT_LIST_ITEM:
      newList = [...state.list];
      index = findIndex(propEq('id', action.payload.item.id), newList);
      newList[index] = action.payload.item;

      return {
        ...state,
        list: newList,
      };

    default:
      return {
        ...state,
      };
  }
};
