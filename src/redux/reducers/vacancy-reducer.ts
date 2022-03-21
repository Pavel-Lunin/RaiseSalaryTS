import { ActionVacancy, VACANCY } from './../actions/vacancy';
import type { VacancyType } from '../../redux/actions/vacancy';

type State = {
    vacancy: Array<VacancyType>;
    isLoading: boolean;
};

const initialState: State = {
    vacancy: [],
    isLoading: false,
};

const vacancyReducer = (state: State = initialState, action: ActionVacancy) => {
    switch (action.type) {
        case VACANCY.FETCH_VACANCY: {
            return { ...state, isLoading: true };
        }
        case VACANCY.FETCH_VACANCY_SUCCESS: {
            return { ...state, vacancy: action.vacancy, isLoading: false };
        }
        case VACANCY.ERROR_FETCH_VACANCIES: {
            return { ...state, isLoading: false };
        }
        default:
            return state;
    }
};

export default vacancyReducer;
