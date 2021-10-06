import {combineReducers} from 'redux';
import vacancyReducer from './vacancy-reducer';

const rootReducer = combineReducers({
  vacancy: vacancyReducer,
});

export default rootReducer;
