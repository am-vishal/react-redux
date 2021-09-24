let initialState = {};
const SimpleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAMPLE_ACTION':
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};

export default SimpleReducer;
