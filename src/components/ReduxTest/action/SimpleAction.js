export const SimpleAction = () => (dispatch) => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'Result of SIMPLE_ACTION',
  });
};
