import axios from 'axios';

import type { Dispatch } from 'redux';

type ResponseType = {
    data: DataType;
};

export type DataType = {
    vacancies: Array<VacanciesTypes>;
};

export type VacanciesTypes = {
    id: number;
    header: string;
};

export type fetchVacancy = {
    type: VACANCY.FETCH_VACANCY;
};

export type fetchVacancyType = {
    type: VACANCY.FETCH_VACANCY_SUCCESS;
    vacancy: Array<VacancyType>;
};

export type SetFavoriteVacancyType = {
    type: VACANCY.ADD_FAVOURITE_VACANCY;
    id: number;
};

export type deleteFavoriteVacancyType = {
    type: VACANCY.DELETE_FAVOURITE_VACANCY;
    id: number;
};

export type errorFetchVacancies = {
    type: VACANCY.ERROR_FETCH_VACANCIES;
};

export type VacancyType = {
    id: number;
    header: string;
};

export type ActionVacancy =
    | SetFavoriteVacancyType
    | deleteFavoriteVacancyType
    | fetchVacancy
    | fetchVacancyType
    | errorFetchVacancies;

export const getData = () => async (dispatch: Dispatch<ActionVacancy>) => {
    dispatch({
        type: VACANCY.FETCH_VACANCY
    });

    try {
        const response: ResponseType = await axios.get('https://api.zp.ru/v1/vacancies/');

        dispatch({
            type: VACANCY.FETCH_VACANCY_SUCCESS,
            vacancy: response.data.vacancies
        });

        return Promise.resolve();
    } catch {
        dispatch({
            type: VACANCY.ERROR_FETCH_VACANCIES
        });

        return Promise.reject();
    }
};

export const addFavoriteVacancy = (id: number) => (dispatch: (arg0: ActionVacancy) => void) => {
    try {
        dispatch({
            type: VACANCY.ADD_FAVOURITE_VACANCY,
            id
        });

        return Promise.resolve();
    } catch {
        return Promise.reject();
    }
};

export const deleteFavoriteVacancy = (id: number) => (dispatch: (arg0: ActionVacancy) => void) => {
    try {
        dispatch({
            type: VACANCY.DELETE_FAVOURITE_VACANCY,
            id
        });

        return Promise.resolve();
    } catch {
        return Promise.reject();
    }
};

export enum VACANCY {
    FETCH_VACANCY = 'vacancy/FETCH_VACANCY',
    FETCH_VACANCY_SUCCESS = 'vacancy/FETCH_VACANCY_SUCCESS',
    ADD_FAVOURITE_VACANCY = 'vacancy/ADD_FAVOURITE_VACANCY',
    DELETE_FAVOURITE_VACANCY = 'vacancy/DELETE_FAVOURITE_VACANCY',
    SET_IS_LOADING = 'vacancy/SET_IS_LOADING',
    ERROR_FETCH_VACANCIES = 'vacancy/ERROR_FETCH_VACANCIES'
}
