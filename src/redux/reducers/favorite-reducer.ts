import { ActionVacancy, VACANCY } from './../actions/vacancy';

export type State = Set<number>;

const favoriteReducer = (state: State = new Set([]), action: ActionVacancy): State => {
    switch (action.type) {
        case VACANCY.ADD_FAVOURITE_VACANCY: {
            const set = new Set(state.values());

            set.add(action.id);

            return set;
        }
        case VACANCY.DELETE_FAVOURITE_VACANCY: {
            const set = new Set(state.values());

            set.delete(action.id);

            return set;
        }
        default:
            return state;
    }
};

export default favoriteReducer;
