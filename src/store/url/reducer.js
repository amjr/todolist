export const initialState = {
  path: '/',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
