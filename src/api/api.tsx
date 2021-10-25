import React from 'react';

import axios from 'axios';
import {setFavoriteVacancy} from '../redux/actions/vacancy';

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

export const getData = async (
  setVacancies: React.Dispatch<React.SetStateAction<Array<VacanciesTypes>>>,
) => {
  const response: ResponseType = await axios.get(
    'https://api.zp.ru/v1/vacancies/',
  );

  setVacancies(response.data.vacancies);
};

export const addFavoriteVacancy = (id: number) => async dispatch => {
  const r = await axios.post(`https://api.zp.ru/v1/vacancies/${id}/favorite`);
  console.log(r);

  dispatch(setFavoriteVacancy(id));
};
