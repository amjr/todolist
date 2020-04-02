// import * as types from './actionsTypes';

export const initialState = {
  list: [
    {
      id: 1,
      name: 'Desenvolvimento básico da lista',
      checked: false,
      done: false,
    },
  ],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
