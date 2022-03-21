import { combineReducers } from 'redux';
import vacancyReducer from './vacancy-reducer';
import favoriteReducer from './favorite-reducer';

const rootReducer = combineReducers({
    vacancy: vacancyReducer,
    favorite: favoriteReducer
});

type RootReducer = typeof rootReducer;

export type AppStateType = ReturnType<RootReducer>;

export default rootReducer;
