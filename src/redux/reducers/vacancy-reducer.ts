import type {ActionVacancy} from './../actions/vacancy';

import {SET_VACANCY, ADD_FAVOURITE_VACANCY} from './../actions/vacancy';

const initialState = {
  vacancy: {},
  favoriteVacancy: {},
};

const vacancyReducer = (state = initialState, action: ActionVacancy) => {
  switch (action.type) {
    case SET_VACANCY: {
      return {...state, vacancy: action.vacancy};
    }
    case ADD_FAVOURITE_VACANCY: {
      return {...state.favoriteVacancy, ...action.payload.id};
    }
    default:
      return state;
  }
};
export default vacancyReducer;
