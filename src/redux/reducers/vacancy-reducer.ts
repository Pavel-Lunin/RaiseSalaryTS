const SET_VACANCY = 'vacancy/SET_VACANCY';

const initialState = {
  vacancy: {},
};

const vacancyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VACANCY: {
      return {...state, vacancy: action.payload.vacancy};
    }
    default:
      return state;
  }
};
export default vacancyReducer;
