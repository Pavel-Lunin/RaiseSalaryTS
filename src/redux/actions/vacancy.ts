export type SetVacancyType = {
  type: VACANCY.SET_VACANCY;
  vacancy: VacancyType;
};

export type SetFavoriteVacancyType = {
  type: VACANCY.ADD_FAVOURITE_VACANCY;
  payload: {id: number};
};

export type VacancyType = {
  id: number;
  header: string;
};

export type ActionVacancy = SetVacancyType | SetFavoriteVacancyType;

export const setVacancy = (vacancy: VacancyType): SetVacancyType => ({
  type: VACANCY.SET_VACANCY,
  vacancy,
});

export const setFavoriteVacancy = (id: number): SetFavoriteVacancyType => ({
  type: VACANCY.ADD_FAVOURITE_VACANCY,
  payload: {
    id,
  },
});

export enum VACANCY {
  SET_VACANCY = 'vacancy/SET_VACANCY',
  ADD_FAVOURITE_VACANCY = 'vacancy/ADD_FAVOURITE_VACANCY',
}
